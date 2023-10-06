/** Timeline, player, and flame graph. */
import * as d3 from 'd3'
import * as d3Flamegraph from 'd3-flame-graph'
import d3Tip from 'd3-tip'

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
    this.initButtons()
    this.initFlamegraph()

    this.startTicking()
  }

  initButtons() {
    this.playButton.addEventListener('click', () => this.start())
    this.pauseButton.addEventListener('click', () => this.pause())
    this.on('isPlaying', isPlaying => this.domElement.classList.toggle('playing', isPlaying))
  }

  initFlamegraph() {
    const container = this.domElement.querySelector('#flamegraph')
    this.flamegraph = new Flamegraph(container)
  }

  startTicking() {
    setTimeout(() => this.tick(), 0)
  }

  setToTrace(trace, traceEntity) {
    this.cursor = trace.createCursor()
    this.traceEntity = traceEntity

    this.updateEntities()

    this.flamegraph?.setToPlayer(this, trace)
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

  togglePlaying() {
    if (this.isPlaying) {
      this.pause()
    } else {
      this.resume()
    }
  }

  reset() {
    this.resetSteps()
  }
  //#endregion

  //#region ticking
  tick() {
    setTimeout(() => this.tick(), 1000 / this.ticksPerSecond)

    if (this.isPlaying) {
      this._tick()
    } else {
      this._tick(0)
    }
  }

  /**
   * @param {*} steps If undefined, tick automatically and calculate steps from the time since the last tick.
   */
  _tick(steps = undefined) {
    if (!this.cursor) return

    const now = Date.now()
    const secondsSinceLastTick = (now - this.lastTick) / 1000

    let actualSteps, exactSteps
    if (steps === undefined) { // calculate steps from time
      // Dithering (correct rounding errors)
      exactSteps = secondsSinceLastTick * this.stepsPerSecond
      exactSteps += this.stepsRoundingError || 0
      actualSteps = Math.floor(exactSteps)
      this.stepsRoundingError = exactSteps - actualSteps
    } else {
      actualSteps = Math.floor(steps)
      delete this.stepsRoundingError
      exactSteps = steps
    }

    this.doSteps(actualSteps, secondsSinceLastTick, exactSteps)
    this.lastTick = now

    if (steps === undefined && !this.canStepForward()) {
      this.pause()
    }
  }

  doSteps(steps, secondsSinceLastTick, exactSteps = steps) {
    const activeObjects = new Set()
    if (steps) {
      this.cursor.step(steps, {
        activateFrame: frame => {
          console.log(frame.toString())
          activeObjects.add(frame.receiver)
          if (this.getObjectEntity(frame.receiver)) {
            // NOTE: could optimize this check
            this.objectIndex += Math.sign(steps)
          }
        }
      })
    } else {
      const currentFrame = this.cursor.currentFrame
      if (currentFrame) activeObjects.add(currentFrame.receiver)
    }

    this.objectEntities.forEach(objectEntity => {
      objectEntity.setGlowState('active', activeObjects.has(objectEntity.object)
        ? 1
        : Math.max(0, objectEntity.getGlowFraction('active') - secondsSinceLastTick / this.glowTime))
    })
    if (this.trail) {
      this.trail.headIndex = this.objectIndex < 0
        ? 0 // not started yet
        : !this.cursor.currentFrame
          ? this.trail.entities.length + this.trail.length // finished
            // TODO: could do nicer by remembering time since last frame
          : this.objectIndex
            // soft interpolation to next object
            + Math.min(1, Math.max(0, (
              this.objectIndex + 1 < this.objectTimes.length
                ? (this.cursor.currentTime - this.objectTimes[this.objectIndex] // between frames
                  + (exactSteps % 1)) // between steps
                    / (this.objectTimes[this.objectIndex + 1] - this.objectTimes[this.objectIndex])
                : 0)))
      this.trail.updatePosition()
    }

    this.flamegraph?.updateColors()

    this.emit('step')
  }

  resetSteps() {
    this.cursor?.reset()

    this.objectIndex = -1
    if (this.trail) {
      this.trail.headIndex = 0
      this.trail.updatePosition()
    }
  }

  canStepForward() {
    return this.cursor.canStepForward()
  }
  //#endregion

  //#region updating
  updateEntities() {
    this.updateObjectEntities()
    this.updateTrailIndices()
  }

  updateObjectEntities() {
    this.objectEntities = this.traceEntity.allObjectEntities()
  }

  updateTrailIndices() {
    const activeObjects = []
    /** Start time of each receiver object. */
    this.objectTimes = []
    this.cursor.stepAll({
      activateFrame: (frame, cursor) => {
        if (this.getObjectEntity(frame.receiver)) {
          activeObjects.push(frame.receiver)
          this.objectTimes.push(cursor.currentTime)
        }
      }
    })
    this.cursor.reset()

    if (this.trail) {
      this.trail.setEntities(activeObjects.map(object => this.getObjectEntity(object)))
    }
  }

  getObjectEntity(traceObject) {
    return this.objectEntities.find(objectEntity => objectEntity.object == traceObject)
  }
  //#endregion updating
}

export class Flamegraph {
  //#region constants
  filteredObjectColor = '#777'
  minEffectiveCellHeightForLabel = 6
  //#endregion

  //#region constructor
  constructor(domElement) {
    this.domElement = domElement
    this.init()
  }

  init() {
    this.domElement.innerHTML = ''

    this.initFlamegraph()
  }

  initFlamegraph() {
    this.flamegraph = d3Flamegraph.flamegraph()

    this.initFlamegraphGeometry()
    this.initFlamegraphFrames()
    this.initFlamegraphEvents()

    this.buildFlamegraph()
  }

  initFlamegraphGeometry() {
    this.setFlamegraphGeometry(1)
  }

  initFlamegraphFrames() {
    this.initFlamegraphFrameLabels()

    const tip = d3Tip()
    tip
      .direction("s")
      .offset([8, 0])
      .attr('class', 'd3-flame-graph-tip')
      .html(d => {
        if (!d.data.frame) {
          // hide tip for dummies
          tip.style('display', 'none')
          return undefined
        }
        tip.style('display', 'block')
        return d.data.name
      })
    this.flamegraph.tooltip(tip)

    this.flamegraph.setColorMapper(d => {
      const frame = d.data.frame
      if (!frame) return 'transparent' // dummy

      // Dynamic colors will be applied in updateColors() later
      return d.data.color ?? this.filteredObjectColor
    })
  }

  initFlamegraphFrameLabels() {
    this.flamegraph.getName(d => d.data.name)

    // Only display labels if effective height is large enough
    // (CSS isn't capable of this)
    new ResizeObserver(() => {
      this.updateShowLabels()
    }).observe(this.domElement)
  }

  initFlamegraphEvents() {
    // Disable zooming
    this.flamegraph
      .onClick(d => {
        if (d.parent) this.flamegraph.resetZoom()
      })
      .transitionDuration(0)

    // Register hover events
    const hoveredFrames = []
    this.flamegraph
      .onHover(d => {
        const frame = d?.data?.frame
        if (!frame) return
        hoveredFrames.push(frame)
        this.onHoverFrame(frame, d)
      })
      .setDetailsHandler(d => {
        if (d?.data?.frame == null) {
          hoveredFrames.forEach(frame => this.onUnhoverFrame(frame))
          hoveredFrames.length = 0
        }
      })
  }

  buildFlamegraph() {
    d3.select(this.domElement)
      .datum({})
      .call(this.flamegraph)

    this.svg = this.domElement.querySelector('svg')
    this.updateFlamegraphGeometry()
  }
  //#endregion

  //#region updating
  setToPlayer(player, trace) {
    this.player = player
    this.maxStackDepth = trace.maxStackDepth()

    const rootFrame = trace.rootFrame
    const flamegraphData = this.toFlamegraphData(rootFrame)

    this.setFlamegraphGeometry(this.maxStackDepth)
    this.updateFlamegraphNodes(flamegraphData)
  }

  /**
   * Convert TraceFrame structure into data for d3-hierarchy.
   * As d3-flamegraph has no notion of start and end time but always fills each node's space with all children, insert dummy nodes between actual child frames.
   * */
  toFlamegraphData(frame) {
    const data = {
      frame,
      get name() { return frame.name },
      value: frame.endTime - frame.startTime + 1
    }
    data.children = []
    if (frame.children.length) {
      let time = frame.startTime
      frame.children.forEach(child => {
        // insert dummy to reserve space
        data.children.push({
          value: child.startTime - time,
          children: []
        })
        // insert child
        data.children.push(this.toFlamegraphData(child))
        time = child.endTime + 1
      })
      // insert dummy to reserve space
      data.children.push({
        value: frame.endTime - time + 1,
        children: []
      })
    }
    return data
  }

  setFlamegraphGeometry(maxStackDepth) {
    const width = 1000
    const cellHeight = 16
    /* const extraVerticalSpaceFraction = 1 / 4
    const maxExtraVerticalSpaceVh = 3

    const computedMaxExtraVerticalSpace = maxExtraVerticalSpaceVh / 100 * window.innerHeight
    const extraVerticalSpace = Math.min(height * extraVerticalSpaceFraction, computedMaxExtraVerticalSpace)
    const cellHeight = (height - extraVerticalSpace) / maxStackDepth */
    const extraVerticalSpace = 0
    const height = cellHeight * maxStackDepth + extraVerticalSpace
    this.flamegraph
      .width(width)
      .height(height)
      .cellHeight(cellHeight)

    if (this.svg) this.updateFlamegraphGeometry()
  }

  updateFlamegraphGeometry() {
    this.svg.setAttribute('viewBox', `0 0 ${this.flamegraph.width()} ${this.flamegraph.height()}`)
    this.svg.setAttribute('preserveAspectRatio', 'none')
  }

  updateFlamegraphNodes(data) {
    this.flamegraph.update(data)

    this.updateShowLabels()
    this.updateColors()
  }

  updateColors(d0 = undefined) {
    d3.select(this.svg).selectAll('g').selectAll('rect').attr('fill', d => {
      const frame = d.data.frame
      if (!frame) return 'transparent' // dummy

      if (!d0 || d0 == d) {
        d.data.color = this.getColor(frame)
      }

      return d.data.color
    })
  }

  updateShowLabels() {
    const useLerp = true

    let showLabels
    const minClientHeightForLabel = this.minEffectiveCellHeightForLabel * this.maxStackDepth
    if (!useLerp) {
      showLabels = this.domElement.clientHeight >= minClientHeightForLabel
    } else {
      const fadeOutHeight = minClientHeightForLabel * 0.25
      showLabels = Math.max(0, Math.min(1, (this.domElement.clientHeight - minClientHeightForLabel + fadeOutHeight) / fadeOutHeight))
    }
    if (showLabels == this._lastShowLabels) return

    const labels = d3.select(this.svg).selectAll('g').selectAll('.d3-flame-graph-label')
    if (!useLerp) {
      labels.style('display', showLabels ? 'block' : 'none')
    } else {
      labels.style('opacity', showLabels)
    }

    this._lastShowLabels = showLabels
  }

  getColor(frame) {
    const objectEntity = this.getObjectEntity(frame.receiver)
    const [_, color3d] = objectEntity?.getDisplayColor(frame == this.player.cursor.currentFrame) ?? []
    if (!color3d) return this.filteredObjectColor
    return `#${color3d.getHexString()}`
  }
  //#endregion

  //#region events
  onHoverFrame(frame) {
    const objectEntity = this.getObjectEntity(frame.receiver)
    objectEntity?.addHoveredEntity(this)
  }

  onUnhoverFrame(frame) {
    const objectEntity = this.getObjectEntity(frame.receiver)
    objectEntity?.removeHoveredEntity(this)
  }

  getObjectEntity(traceObject) {
    return this.player.getObjectEntity(traceObject)
  }
  //#endregion
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

    // Optimization (this saves us 4ms/call in Chrome!)
    this.domElementClientWidth = this.domElement.clientWidth
    this.cursorClientWidth = this.cursor.clientWidth

    new ResizeObserver(() => {
      this.domElementClientWidth = this.domElement.clientWidth
    }).observe(this.domElement)
    new ResizeObserver(() => {
      this.cursorClientWidth = this.cursor.clientWidth
    }).observe(this.cursor)
  }
  //#endregion

  //#region accessors
  minTime
  maxTime

  get time() {
    return this.minTime + this._cursorX
      / (this.domElementClientWidth - this.cursorClientWidth)
      * (this.maxTime - this.minTime)
  }

  set time(value) {
    this._cursorX = (value - this.minTime)
      / (this.maxTime - this.minTime)
      * (this.domElementClientWidth - this.cursorClientWidth)
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
