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
    this.endTime = endTime
    this.children = children
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
  currentTime
  /** Last item is top frame */
  currentStack

  get startTime() {
    return this.trace.rootFrame.startTime
  }

  get endTime() {
    return this.trace.rootFrame.endTime
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
    this.currentTime = this.startTime - 1
    this.currentStack = []
  }

  step(steps = Infinity, options = {}) {
    const { visitFrame } = options

    if (this.currentTime === this.startTime - 1) {
      this.currentTime++
      this.stepInto(this.trace.rootFrame)
    }

    let stepsLeft = steps
    while (stepsLeft > 0) {
      if (this.currentStack.length === 0) {
        /* if (isFinite(stepsLeft)) {
          throw new Error(`Ran out of frames after ${steps - stepsLeft} steps`)
        } */
        break
      }

      const currentFrame = this.currentStack[this.currentStack.length - 1]
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
          this.stepInto(nextChild)
        } else {
          this.stepOut()
        }
      }
    }
  }

  stepInto(frame) {
    this.currentStack.push(frame)
  }

  stepOut() {
    this.currentStack.pop()
  }
  //#endregion
}
