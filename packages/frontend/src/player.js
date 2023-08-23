import { EventEmitter } from 'eventemitter3'


export class Player extends EventEmitter {
    //#region properties
    isPlaying = false

    ticksPerSecond = 60
    stepsPerSecond = 50
    /** Time in seconds for entities to glow. */
    glowTime = 1
    //#endregion

    //#region constructor
    constructor(domElement) {
        super()

        this.domElement = domElement

        this.init()
    }

    init() {
        this.playButton.addEventListener('click', () => this.start())
        this.pauseButton.addEventListener('click', () => this.pause())
        this.on('isPlaying', isPlaying => this.domElement.classList.toggle('playing', isPlaying))

        setTimeout(() => this.tick(), 0)
    }

    setToTrace(trace, traceEntity) {
        this.cursor = trace.createCursor()
        this.traceEntity = traceEntity

        this.updateEntities()
    }
    //#endregion

    //#region accessors
    get currentTime() {
        return this.cursor.currentTime
    }

    set currentTime(value) {
        this._tick(value - this.currentTime)
    }

    get playButton() {
        return this.domElement.querySelector('#player-play')
    }

    get pauseButton() {
        return this.domElement.querySelector('#player-pause')
    }
    //#endregion

    //#region control
    start() {
        if (!this.canStepForward()) {
            this.reset()
        }

        this.resume()
    }

    stop() {
        this.pause()
        this.reset()
    }

    restart() {
        this.stop()
        this.start()
    }

    resume() {
        this.isPlaying = true
        this.emit('isPlaying', true)
    }

    pause() {
        this.isPlaying = false
        this.emit('isPlaying', false)
    }

    reset() {
        this.resetSteps()
    }
    //#endregion

    //#region steps
    tick() {
        setTimeout(() => this.tick(), 1000 / this.ticksPerSecond)

        if (this.isPlaying) {
            this._tick()
        } else {
            this._tick(0)
        }
    }

    /**
     * @param {*} steps If undefined, steps are calculated from the time since the last tick.
     */
    _tick(steps = undefined) {
        if (!this.cursor) return

        const now = Date.now()
        const secondsSinceLastTick = (now - this.lastTick) / 1000

        let actualSteps
        if (steps === undefined) {  // calculate steps from time
            // Dithering (correct rounding errors)
            let exactSteps = secondsSinceLastTick * this.stepsPerSecond
            exactSteps += this.stepsRoundingError || 0
            actualSteps = Math.round(exactSteps)
            this.stepsRoundingError = exactSteps - steps
        } else {
            actualSteps = steps
            delete this.stepsRoundingError
        }

        this.doSteps(actualSteps, secondsSinceLastTick)
        this.lastTick = now

        if (steps === undefined && !this.canStepForward()) {
            this.pause()
        }
    }

    doSteps(steps, secondsSinceLastTick) {
        const activeObjects = new Set()
        this.cursor.step(steps, {
            visitFrame: frame => {
                console.log(frame.toString())
                activeObjects.add(frame.receiver)
            }
        })

        this.objectEntities.forEach(objectEntity => {
            objectEntity.setGlowState('active', activeObjects.has(objectEntity.object)
                ? 1
                : Math.max(0, objectEntity.getGlowFraction('active') - secondsSinceLastTick / this.glowTime))
        })

        this.emit('step')
    }

    resetSteps() {
        this.cursor?.reset()
    }

    canStepForward() {
        return this.cursor.canStepForward()
    }
    //#endregion

    //#region updating
    updateEntities() {
        this.updateObjectEntities()
    }

    updateObjectEntities() {
        this.objectEntities = this.traceEntity.allObjectEntities()
    }
    //#endregion updating
}

export class Timeline extends EventEmitter {
    //#region constructor
    constructor(domElement) {
        super()

        this.domElement = domElement
        this.init()
    }

    init() {
        this.cursor = this.domElement.querySelector('#cursor')

        this.domElement.addEventListener('pointerdown', this._boundEventHandler('onPointerDown'))
    }
    //#endregion

    //#region accessors
    minTime
    maxTime

    get time() {
        return this.minTime + this._cursorX
            / (this.domElement.clientWidth - this.cursor.clientWidth)
            * (this.maxTime - this.minTime)
    }

    set time(value) {
        this._cursorX = (value - this.minTime)
            / (this.maxTime - this.minTime)
            * (this.domElement.clientWidth - this.cursor.clientWidth)
    }

    get _cursorX() {
        return new DOMMatrixReadOnly(getComputedStyle(this.cursor).transform).m41
    }

    set _cursorX(value) {
        // transform is required for sub-pixel-precise rendering
        this.cursor.style.transform = `translateX(${value}px)`
    }
    //#endregion

    //#region events
    onPointerDown(event) {
        this.dragging = true
        this.setCursorFromPointer(event)

        // Add global event listeners to track pointer dragging outside the timeline
        const document = this.domElement.ownerDocument
        document.addEventListener('pointermove', this._boundEventHandler('onPointerMove'), true)
        document.addEventListener('pointerup', this._boundEventHandler('onPointerUp'), true)

        this.emit('startDrag')
    }

    onPointerMove(event) {
        if (event.isT4dSimulated) return
        if (!this.dragging) return
        console.log('move', event)

        this.setCursorFromPointer(event)
    }

    onPointerUp(event) {
        if (event.isT4dSimulated) return

        this.setCursorFromPointer(event)
        this.dragging = false

        const document = this.domElement.ownerDocument
        document.removeEventListener('pointermove', this._boundEventHandler('onPointerMove'), true)
        document.removeEventListener('pointerup', this._boundEventHandler('onPointerUp'), true)

        this.emit('endDrag')
    }

    setCursorFromPointer(event) {
        let x = event.pageX - this.domElement.getBoundingClientRect().left
        x = Math.max(
            this.cursor.clientWidth / 2,
            Math.min(this.domElement.clientWidth - this.cursor.clientWidth / 2,
            x)
        )
        x -= this.cursor.clientWidth / 2
        this._cursorX = x

        this.emit('time')
    }

    _boundEventHandler(functionName) {
        // Preserve bound function instances for removing them later
        return (this._boundEventHandlers ??= {})[functionName] ??= this[functionName].bind(this)
    }
    //#endregion
}
