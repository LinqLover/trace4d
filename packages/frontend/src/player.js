export class Player {
	//#region properties
	isPlaying = false

	ticksPerSecond = 60
	stepsPerSecond = 50
	glowTime = 1
	//#endregion

	//#region constructor
	constructor(trace, traceEntity, traceMap) {
		this.cursor = trace.createCursor()
		this.traceEntity = traceEntity
		this.traceMap = traceMap
		this.updateEntities()
	}
	//#endregion

	//#region control
	start() {
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

		setTimeout(() => this.tick(), 0)
	}

	pause() {
		this.isPlaying = false
	}

	reset() {
		this.resetSteps()
	}
	//#endregion

	//#region steps
	tick() {
		if (!this.isPlaying) return

		const now = Date.now()
		this.doSteps((now - this.lastTick) / 1000)
		this.lastTick = Date.now()

		setTimeout(() => this.tick(), 1000 / this.ticksPerSecond)
	}

	doSteps(secondsSinceLastTick) {
		const steps = Math.round(secondsSinceLastTick * this.stepsPerSecond)

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

		this.traceMap.updateScene()
	}

	resetSteps() {
		this.cursor.reset()
	}
	//#endregion

	//#region updating
	updateEntities() {
		this.updateObjectEntities()
	}

	updateObjectEntities() {
		this.objectEntities = this.traceEntity.allObjectEntities()
	}
}
