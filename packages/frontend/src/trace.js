import collect from 'collect.js'


export class Trace {
  constructor(objects, classes, rootFrame) {
    this.objects = objects
    this.classes = classes
    this.rootFrame = rootFrame
  }

  createCursor() {
    return new TraceCursor(this)
  }
}

export class TraceObject {
  name
  class
  fields
  fieldHistories

  static valueToString(value) {
    if (value instanceof TraceObject) return value.name
    return value.toString()
  }
}

export class TraceClass {
  name
  category
}

export class TraceClassCategory {
  constructor(name, $package) {
    this.name = name
    this.package = $package
  }
}

export class TracePackage {
  constructor(name) {
    this.name = name
  }
}

export class TraceFieldHistory {
  constructor(times, values) {
    this.times = times
    this.values = values
  }
}

export class TraceFrame {
  constructor(receiver, message, $arguments, answer, startTime, endTime, children) {
    this.receiver = receiver
    this.message = message
    this.arguments = $arguments
    this.answer = answer
    this.startTime = startTime
    /** inclusive */
    this.endTime = endTime
    this.children = children
  }

  allFrames() {
    return [this, ...this.children.flatMap(child => child.allFrames())]
  }

  toString() {
    return `${this.receiver.class.name}>>${this.message}`
  }
}

export class TraceReader {
  constructor(traceData) {
    this.traceData = traceData
  }

  objects = {}
  classes = {}
  classCategories = {}
  packages = {}

  static readTrace(traceData) {
    return new this(traceData).getTrace()
  }

  static async readTraceFromLocalFile(localFile) {
    const fileReader = new FileReader()
    fileReader.readAsText(localFile)
    const result = await new Promise((resolve, reject) => {
      fileReader.onload = () => resolve(fileReader.result)
      fileReader.onerror = () => reject(fileReader.error)
    })
    const traceData = JSON.parse(result)
    return this.readTrace(traceData)
  }

  static async readTraceFromServerFile(serverFile) {
    const response = await fetch(serverFile)
    if (!response.ok) throw new Error(`Failed to load trace: ${response.status} ${response.statusText}`)
    const traceData = await response.json()
    return this.readTrace(traceData)
  }

  getTrace() {
    const objects = this.getObjects(this.traceData.objects)
    const classes = this.getClasses(this.traceData.classes)
    const rootFrame = this.getFrame(this.traceData.trace)
    return new Trace(objects, classes, rootFrame)
  }

  getObjects(objectDatas) {
    return collect(objectDatas).map((objectData, objectID) =>
      this.getObject(objectID, objectData)
    ).values().all()
  }

  getObject(objectID, objectData = undefined) {
    let object = this.objects[objectID]
    if (object == null) {
      object = new TraceObject()
      this.objects[objectID] = object
    }

    if (objectData === undefined) return object

    object.name = objectData.name
    object.class = this.getClass(objectData.class)
    object.fields = collect(objectData.fields).map((fieldData) =>
      this.getStringOrObject(fieldData)
    ).all()
    object.fieldHistories = this.getFieldHistories(objectData.historicFields)

    return object
  }

  getClass(className, classData = undefined) {
    let $class = this.classes[className]
    if ($class == null) {
      $class = new TraceClass()
      this.classes[className] = $class
    }

    if (classData === undefined) return $class

    $class.name = className
    $class.category = this.getClassCategory(classData.category, classData.package)

    return $class
  }

  getClassCategory(categoryName, packageName) {
    let category = this.classCategories[categoryName]
    if (category != null) return category

    const $package = this.getPackage(packageName)
    category = new TraceClassCategory(categoryName, $package)
    this.classCategories[categoryName] = category
    return category
  }

  getPackage(packageName) {
    let $package = this.packages[packageName]
    if ($package != null) return $package

    $package = new TracePackage(packageName)
    this.packages[packageName] = $package
    return $package
  }

  getClasses(classesData) {
    return collect(classesData).map((classData, className) =>
      this.getClass(className, classData)
    ).all()
  }

  getFieldHistories(fieldHistoryDatas) {
    return collect(fieldHistoryDatas).map((fieldHistoryData, fieldName) =>
      this.getFieldHistory(fieldHistoryData)
    ).all()
  }

  getFieldHistory(fieldHistoryData) {
    if (fieldHistoryData == null) return null

    const times = fieldHistoryData.times
    const values = fieldHistoryData.values.map(valueData => this.getStringOrObject(valueData))
    return new TraceFieldHistory(times, values)
  }

  getStringOrObject(stringOrID) {
    if (stringOrID[0] !== '@') {
      if (stringOrID[0] === '\\') {
        return stringOrID.substring(1)
      }
      return stringOrID
    }

    return this.getObject(stringOrID)
  }

  getFrame(frameData) {
    const receiver = this.getObject(frameData.receiver)
    const message = frameData.message
    const $arguments = frameData.arguments.map(argumentData => this.getStringOrObject(argumentData))
    const answer = frameData.answer != null ? this.getStringOrObject(frameData.answer) : null
    const startTime = frameData.startTime
    const endTime = frameData.endTime
    const children = frameData.children.map(childFrameData => this.getFrame(childFrameData))
    return new TraceFrame(receiver, message, $arguments, answer, startTime, endTime, children)
  }
}

export class TraceCursor {
  //#region properties
  trace
  /** Integer inside [startTime, endTime] */
  currentTime
  /** Last item is top frame */
  currentStack

  get currentFrame() {
    return this.currentStack[this.currentStack.length - 1]
  }

  get startTime() {
    return this.trace.rootFrame.startTime
  }

  get endTime() {
    return this.trace.rootFrame.endTime + 1
  }
  //#endregion

  //#region constructor
  constructor(trace) {
    this.trace = trace
    this.reset()
  }
  //#endregion

  //#region steps
  reset() {
    this.currentTime = this.startTime
    this.currentStack = [this.trace.rootFrame]
  }

  step(steps, options = {}) {
    // steps must be an integer
    console.assert(steps === Math.floor(steps))

    if (steps > 0) {
      steps = Math.min(steps, this.endTime - this.currentTime)
      this.stepForward(steps, options)
    } else if (steps < 0) {
      steps = Math.max(steps, this.startTime - this.currentTime)
      this.stepBackward(-steps, options)
    }

    return this
  }

  stepAll(options = {}) {
    return this.stepTo(this.endTime, options)
  }

  stepTo(time, options = {}) {
    return this.step(time - this.currentTime, options)
  }

  stepForward(steps, options = {}) {
    const { visitFrame } = options

    let stepsLeft = steps
    while (stepsLeft > 0) {
      if (this.currentStack.length === 0) {
        throw new Error(`Ran out of frames after ${steps - stepsLeft} steps`)
      }

      const currentFrame = this.currentFrame]
      const nextChild = currentFrame.children.find(child => child.startTime > this.currentTime)
      const nextFrameTime = nextChild ? nextChild.startTime : currentFrame.endTime + 1
      const timeUntilNextFrame = nextFrameTime - this.currentTime
      if (timeUntilNextFrame > 0) {
        visitFrame?.(currentFrame, this)
      }

      if (timeUntilNextFrame > stepsLeft) {
        this.currentTime += stepsLeft
        stepsLeft = 0
      } else {
        this.currentTime += timeUntilNextFrame
        stepsLeft -= timeUntilNextFrame
        if (nextChild != null) {
          this._stepInto(nextChild)
        } else {
          this._stepOut()
        }
      }
    }
  }

  stepBackward(steps, options = {}) {
    const { visitFrame } = options

    if (steps <= 0) return

    let stepsLeft = steps
    if (this.currentTime === this.endTime) {
      this.currentTime -= 1
      this._stepInto(this.trace.rootFrame)
      stepsLeft -= 1
    }

    while (stepsLeft > 0) {
      if (this.currentStack.length === 0) {
        throw new Error(`Ran out of frames after ${steps - stepsLeft} steps`)
      }

      const currentFrame = this.currentFrame
      const previousChild = currentFrame.children.slice().reverse().find(child => child.endTime < this.currentTime)
      const previousFrameTime = previousChild ? previousChild.endTime : currentFrame.startTime - 1
      const timeUntilPreviousFrame = this.currentTime - previousFrameTime
      if (timeUntilPreviousFrame > 0) {
        visitFrame?.(currentFrame, this)
      }

      if (timeUntilPreviousFrame > stepsLeft) {
        this.currentTime -= stepsLeft
        stepsLeft = 0
      } else {
        this.currentTime -= timeUntilPreviousFrame
        stepsLeft -= timeUntilPreviousFrame
        if (previousChild != null) {
          this._stepInto(previousChild)
        } else {
          this._stepOut()
        }
      }
    }
  }

  canStepForward(steps = 1) {
    return this.currentTime + steps <= this.endTime
  }

  canStepBackward(steps = 1) {
    return this.currentTime - steps >= this.startTime
  }

  _stepInto(frame) {
    this.currentStack.push(frame)
  }

  _stepOut() {
    this.currentStack.pop()
  }
  //#endregion
}
