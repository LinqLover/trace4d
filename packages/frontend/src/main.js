import collect from 'collect.js'
import * as d3Force from 'd3-force'
import * as d3Random from 'd3-random'
const d3 = { ...d3Force, ...d3Random }
import Stats from 'stats.js'
import * as THREE from 'three'
import { DragControls } from 'three/addons/controls/DragControls.js'
import { MapControls } from 'three/addons/controls/MapControls.js'
import WebGL from 'three/addons/capabilities/WebGL.js'
window.THREE = THREE; // threex.dynamictexture.js expects this
import * as THREEx from '../node_modules/threex.dynamictexture/threex.dynamictexture.js'

import Box3Extension from './utils/box3dextension.js'


if (!WebGL.isWebGLAvailable()) {
	const warning = WebGL.getWebGLErrorMessage()
	document.getElementById( 'container' ).appendChild( warning )
  throw new Error('WebGL is not available')
}


const MouseButtonFlags = {
  LEFT: 1,
  MIDDLE: 2,
  RIGHT: 4,
  BACK: 8,
  FORWARD: 16
};

class Entity {
  parent = null
  focusStates = []
  connections = []

  get object3d() {
    return this.cuboid
  }

  get root() {
    return this.parent?.root ?? this
  }

  get width() {
    return this.object3d.geometry.parameters.width
  }

  get depth() {
    return this.object3d.geometry.parameters.depth
  }

  sortAllChildren() {
    // do nothing
  }

  build(traceMap, layoutFunction) {
    this.buildObject3d(traceMap)

    this.buildLabel(traceMap)

    traceMap.dragControls.getObjects().push(this.cuboid)
    this.cuboid.entity = this
    return this.cuboid
  }

  buildObject3d(traceMap) {
    const cuboidGeometry = new THREE.BoxGeometry(10, 10, 10)
    //const cuboidMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    //const cuboidMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 })
    //const cuboidMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00, shininess: 30, specular: 0xffffff })
    //const cuboidMaterial = new THREE.MeshLambertMaterial({ color: 0x00ff00 })
    //const cuboidMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00, roughness: 0.8, metalness: 0 })
    //const cuboidMaterial = new THREE.MeshPhysicalMaterial({ color: 0x00ff00, roughness: 0.8, metalness: 0, clearCoat: 0.5, clearCoatRoughness: 0.5 })
    //const cuboidMaterial = new THREE.MeshStandardMaterial({ color: 'purple' })
    // specular material
    const cuboidMaterial = new THREE.MeshPhongMaterial({
      color: this.constructor.color, // Green color
      specular: 0xffffff, // White specular reflection
      shininess: 1 // Controls the size of the specular highlight (higher values = smaller highlight)
    })

    this.cuboid = new THREE.Mesh(cuboidGeometry, cuboidMaterial)
  }

  buildLabel(traceMap) {
    /** TODO: ideas for improvement:
     * dynamic texture width based on text length
     * vertical text alignment
     */
    const text = this.name.length > 100 ? this.name.substring(0, 100) + '...' : this.name

    this.materials = collect({
      'normal': this.constructor.color,
      'hover': this.constructor.hoverColor,
      'drag': this.constructor.dragColor
    }).mapWithKeys((color, state) => {
      const dynamicTexture = new THREEx.DynamicTexture(
        512 * Math.max((text.length <= 0 ? 1 : 2), Math.min(2.5, this.object3d.geometry.parameters.width / this.object3d.geometry.parameters.height)),
        512
      )
      dynamicTexture.texture.anisotropy = traceMap.renderer.capabilities.getMaxAnisotropy()
      dynamicTexture.clear(`#${color.toString(16).padStart(6, '0')}`)
      dynamicTexture.drawTextCooked({
        text: text,
        lineHeight: 0.15,
        margin: 0.025,
        align: 'center',
        font: 'bolder 90px Comic Sans MS',
      })
      const textMaterial = new THREE.MeshBasicMaterial({ map: dynamicTexture.texture, transparent: true })
      return [state, textMaterial]
    }).all()
    this.updateFocusState()
  }

  addConnection(otherEntity, strength) {
    return this.parent.addChildConnection(this, otherEntity, strength)
  }

  moveTo(x, y, z) {
    this.object3d.position.set(x, y, z)

    this.moved()
  }
  setFocusState(state, bool = true) {
    if (!bool) return this.unsetFocusState(state)

    if (this.focusStates.includes(state)) return
    this.focusStates.push(state)
    this.updateFocusState()
  }

  unsetFocusState(state) {
    if (!this.focusStates.includes(state)) return
    this.focusStates.splice(this.focusStates.indexOf(state), 1)
    this.updateFocusState()
  }

  updateFocusState() {
    if (this.focusStates.includes('drag')) {
      this.object3d.material = this.materials['drag']
    } else if (this.focusStates.includes('hover')) {
      this.object3d.material = this.materials['hover']
    } else {
      this.object3d.material = this.materials['normal']
    }

    this.connections.forEach(connection => {
      connection.setFocusState('hoverEntity', this.focusStates.includes('hover') || this.focusStates.includes('drag'))
    })
  }

  wantsClick(event) {
    return true
  }

  wantsDrag(event) {
    return true
  }

  onHoverStart(event) {
    this.setFocusState('hover')
  }

  onHoverEnd(event) {
    this.unsetFocusState('hover')
  }

  onClick(event) {
    window.selectedEntity = this
    console.log(this.object ?? this.organization ?? this)

    alert(this.description)
  }

  get description() {
    return `${this.name}`
  }

  onDragStart(event) {
    this.setFocusState('drag')
    this.object3d.positionBeforeDrag = this.object3d.position.clone()

    this.root.onChildStartDrag?.(this)
  }

  onDragEnd(event) {
    this.unsetFocusState('drag')
    delete this.object3d.positionBeforeDrag
  }

  onDrag(event) {
    if (!this.constrainDrag(event)) return

    this.moved()

    if (this.d3Node) {
      this.d3Node.x = /* this.d3Node.fx = */ this.object3d.position.x
      this.d3Node.y = /* this.d3Node.fy = */ this.object3d.position.z
    }
  }

  constrainDrag(event) {
    if (!this.object3d.positionBeforeDrag) {
      console.warn('no positionBeforeDrag', this)
      return true
    }

    this.object3d.position.y = this.object3d.positionBeforeDrag.y

    const otherObjects = event.target.getObjects().filter(draggable => draggable !== event.object)
    const threshold = 0.1 // avoid sticking to parent
    const thisBox = Box3Extension.setFromObject(null, this.object3d, false).expandByScalar(-threshold)
    const hasCollision = otherObjects.some(otherObject => {
      const otherBox = Box3Extension.setFromObject(null, otherObject, false).expandByScalar(-threshold)
      return thisBox.intersectsBox(otherBox)
    })

    if (hasCollision) {
      this.object3d.position.copy(this.object3d.positionBeforeDrag)
      // TODO: move as close as possible to the other object
      return false
    }

    const absWidth = (this.parent.width - this.width) / 2
    const absDepth = (this.parent.depth - this.depth) / 2
    this.object3d.position.x = Math.max(-absWidth, Math.min(absWidth, this.object3d.position.x))
    this.object3d.position.z = Math.max(-absDepth, Math.min(absDepth, this.object3d.position.z))

    this.object3d.positionBeforeDrag = this.object3d.position.clone()
    return true
  }

  moved() {
    this.connections.forEach(connection => {
      connection.updatePosition()
    })
  }
}

class OrganizationEntity extends Entity {
  children = []
  childConnections = []

  constructor(organization) {
    super()
    this.organization = organization
  }

  get name() {
    return this.organization.name
  }

  addChild(child) {
    this.children.push(child)
    child.parent = this
  }

  removeChild(child) {
    this.children.splice(this.children.indexOf(child), 1)
    child.parent = null
  }

  sortAllChildren() {
    this.children.forEach(child => child.sortAllChildren())
    this.children.sort((a, b) => a.name.localeCompare(b.name))
  }

  static color = 0x008000
  static hoverColor = 0xff0000

  build(traceMap, layoutFunction) {
    this.buildObject3d(traceMap)

    this.buildChildren(traceMap, layoutFunction)
    layoutFunction?.(this)

    this.buildLabel(traceMap)

    this.buildChildConnections(traceMap)

    traceMap.dragControls.getObjects().push(this.cuboid)
    this.cuboid.entity = this
    return this.cuboid
  }

  buildChildren(traceMap, layoutFunction) {
    const childObjects = this.children.map(child => child.build(traceMap, layoutFunction))
    if (childObjects.length == 0) return

    this.object3d.add(...childObjects)
  }

  buildChildConnections(traceMap) {
    this.childConnections.forEach(connection => {
      this.object3d.add(connection.build())
    })
  }

  addChildConnection(source, target, strength) {
    const connection = new Connection(source, target, strength)
    source.connections.push(connection)
    target.connections.push(connection)
    this.childConnections.push(connection)
    return connection
  }

  adoptSize(width, depth) {
    this.cuboid.geometry = new THREE.BoxGeometry(width, 10, depth)
  }

  layoutChildrenOnGrid() {
    const childObjects = this.object3d.children

    // simple grid layout (width and depth)
    const gridCountX = Math.ceil(Math.sqrt(childObjects.length))
    const gridCountZ = Math.ceil(childObjects.length / gridCountX)
    const cellWidth = collect(childObjects).map(child => child.geometry.parameters.width).max()
    const cellDepth = collect(childObjects).map(child => child.geometry.parameters.depth).max()
    const marginX = /* cellWidth * 1.5 */ 10
    const marginZ = /* cellDepth * 1.5 */ 10
    childObjects.forEach((child, i) => {
      child.position.set(
        ((i % gridCountX) - (gridCountX / 2 - .5)) * (cellWidth + marginX),
        child.geometry.parameters.height,
        (Math.floor(i / gridCountX) - (gridCountZ / 2 - .5)) * (cellDepth + marginZ)
      )
    })

    this.adoptSize(
      gridCountX * (cellWidth + marginX) - marginX * .5,
      gridCountZ * (cellDepth + marginZ) - marginZ * .5
    )
  }

  layoutFDG(traceMap, computeForces) {
    const centripetalForce = 0.001
    const individualForceWeight = 0.1
    const collisionIterations = 10

    const nodes = this.children.map((child, index) => {
      return child.d3Node = {
        index,
        entity: child,
        x: child.object3d.position.x,
        y: child.object3d.position.z,
        radius: new THREE.Box3().setFromObject(child.object3d).getSize(new THREE.Vector3()).setY(0).length() / 2
      }
    })

    const forces = []
    computeForces(this.children, (source, target, strength) => {
      forces.push({
        source: source.d3Node,
        target: target.d3Node,
        strength: strength * individualForceWeight
      })
    })


    // first layout pass: no collision yet
    this.simulation = d3.forceSimulation(nodes)
    this.simulation
      // strive to center
      .force('x', d3.forceX().strength(centripetalForce))
      .force('y', d3.forceY().strength(centripetalForce))

      // individual forces
      .force('link', d3.forceLink(forces)
        .id(node => node.index)
        .strength(force => force.strength))

      // repulsion
      .force('charge', d3.forceManyBody().strength(-.2))

    this.simulation
      .alpha(1)
      .alphaDecay(0)
      //.tick(ticks[0])

    // second pass: fix collisions
    this.simulation
      .force('collide', d3.forceCollide()
        .strength(1)
        .radius(node => node.radius)
        .iterations(collisionIterations))
    this.simulation
      .alpha(1)
      .alphaDecay(0.0001)
      //.tick(1000)
      .on('tick', () => {
        // Is this a beautiful control flow? Probably not. Is JavaScript a beautiful language? Absolutely not.

        // Accelerate simulation.
        // Con: Dropped nodes move too fast. TODO: reset ticks after dropping?
        // TODO: dynamic speed to maintain enough FPS. might not need animation at all for small traces.
        this.simulation.tick(100)

        this.children.forEach(child => {
          child.moveTo(child.d3Node.x, child.object3d.geometry.parameters.height, child.d3Node.y)
        })

        // Update DragControls to override forced position of dragged node
        // HACKED: simulate drag (onpointermove) if currently dragging
        if (traceMap.lastMouseMoveEvent != null) {
          Promise.resolve().then(() => {
            // TODO: updateCursor() is reached but cursor is not updated
            traceMap.renderer.domElement.dispatchEvent(traceMap.lastMouseMoveEvent)
          })
        }
        if (traceMap.lastPointerMoveEvent != null) {
          Promise.resolve().then(() => {
            traceMap.renderer.domElement.dispatchEvent(traceMap.lastPointerMoveEvent)
          })
        }

        // update size
        const margin = 10
        const width = Math.max(collect(nodes).map(node => node.x).max(), -collect(nodes).map(node => node.x).min()) * 2
        const depth = Math.max(collect(nodes).map(node => node.y).max(), -collect(nodes).map(node => node.y).min()) * 2
        this.adoptSize(width + margin, depth + margin)

        traceMap.render()
      })
      .restart()


    // center nodes
    const dx = (collect(nodes).map(node => node.x).min() + collect(nodes).map(node => node.x).max()) / 2
    const dy = (collect(nodes).map(node => node.y).min() + collect(nodes).map(node => node.y).max()) / 2
    nodes.forEach(node => {
      node.x -= dx
      node.y -= dy
    })

    // apply positions
    this.children.forEach(child => {
      child.moveTo(child.d3Node.x, child.object3d.geometry.parameters.height, child.d3Node.y)
    })

    const size = new THREE.Box3().setFromObject(this.object3d).getSize(new THREE.Vector3())
    const margin = 10
    this.adoptSize(size.x + margin, size.z + margin)
  }

  onChildStartDrag() {
    if (!this.simulation) return

    // reheat
    this.simulation.alpha(1)
    this.simulation.restart()
  }
}

class TraceEntity extends OrganizationEntity {
  static planeMaterial = new THREE.MeshBasicMaterial({ color: 0x222222 })

  get object3d() {
    return this.plane
  }

  get depth() {
    return this.plane.geometry.parameters.height // because of rotation
  }

  build(traceMap, layoutFunction) {
    const planeGeometry = new THREE.PlaneGeometry(100, 100)
    planeGeometry.rotateX(-Math.PI / 2)
    this.plane = new THREE.Mesh(planeGeometry, this.constructor.planeMaterial)
    this.plane.entity = this

    this.buildChildren(traceMap, layoutFunction)
    layoutFunction?.(this)

    this.buildChildConnections(traceMap)

    return this.plane
  }

  adoptSize(width, depth) {
    this.plane.geometry = new THREE.PlaneGeometry(width, depth).rotateX(-Math.PI / 2)
  }

  wantsClick(event) {
    return false
  }

  wantsDrag(event) {
    return false
  }

  onHoverStart(event) {
    // do nothing
  }

  onHoverEnd(event) {
    // do nothing
  }
}

class PackageEntity extends OrganizationEntity {
  static color = 0x200000
  static hoverColor = 0x300000
  static dragColor = 0x400000

  constructor($package) {
    super($package)
  }
}

class ClassCategoryEntity extends OrganizationEntity {
  static color = 0x201000
  static hoverColor = 0x300800
  static dragColor = 0x402000

  constructor(category) {
    super(category)
  }
}

class ClassEntity extends OrganizationEntity {
  static color = 0x202000
  static hoverColor = 0x303000
  static dragColor = 0x404000

  constructor($class) {
    super($class)
  }
}

class ObjectEntity extends Entity {
  static color = 0x002000
  static hoverColor = 0x003000
  static dragColor = 0x004000

  constructor(object) {
    super()
    this.object = object
  }

  get name() {
    return this.object.name
  }

  get description() {
    let description = super.description
    if (this.object) {
      description += `\n${this.object.class.category.name}`
      if (this.object.fields) {
        description += `\n`
        description += `\n${collect(this.object.fields).map((value, name) => `${name}: ${value instanceof TraceObject ? value.name : value}`).join('\n')}`
      }
    }
    return description
  }
}

class Connection {
  focusStates = []

  static color = 0xffffff
  static opacity = .5
  static hoverOpacity = 1

  constructor(source, target, strength) {
    this.source = source
    this.target = target
    this.strength = strength
  }

  build() {
    const lineGeometry = new THREE.BufferGeometry().setFromPoints([
      this.source.object3d.position,
      this.target.object3d.position
    ])

    const lineMaterial = new THREE.LineBasicMaterial({
      transparent: true,
      linewidth: this.strength
    })
    this.line = new THREE.Line(lineGeometry, lineMaterial)
    this.updateFocusState()

    return this.line
  }

  updatePosition() {
    const lineGeometry = this.line.geometry
    lineGeometry.attributes.position.array[0] = this.source.object3d.position.x
    lineGeometry.attributes.position.array[1] = this.source.object3d.position.y
    lineGeometry.attributes.position.array[2] = this.source.object3d.position.z
    lineGeometry.attributes.position.array[3] = this.target.object3d.position.x
    lineGeometry.attributes.position.array[4] = this.target.object3d.position.y
    lineGeometry.attributes.position.array[5] = this.target.object3d.position.z
    lineGeometry.attributes.position.needsUpdate = true
  }

  setFocusState(state, bool) {
    if (!bool) return this.unsetFocusState(state)

    if (this.focusStates.includes(state)) return
    this.focusStates.push(state)
    this.updateFocusState()
  }

  unsetFocusState(state) {
    if (!this.focusStates.includes(state)) return
    this.focusStates.splice(this.focusStates.indexOf(state), 1)
    this.updateFocusState()
  }

  updateFocusState() {
    if (this.focusStates.includes('hoverEntity')) {
      this.line.material.opacity = this.constructor.hoverOpacity
    } else {
      this.line.material.opacity = this.constructor.opacity
    }
  }
}

class Trace {
  constructor(objects, classes, rootFrame) {
    this.objects = objects
    this.classes = classes
    this.rootFrame = rootFrame
  }
}

class TraceObject {
  name
  class
  fields
  fieldHistories
}

class TraceClass {
  name
  category
}

class TraceClassCategory {
  constructor(name, $package) {
    this.name = name
    this.package = $package
  }
}

class TracePackage {
  constructor(name) {
    this.name = name
  }
}

class TraceFieldHistory {
  constructor(times, values) {
    this.times = times
    this.values = values
  }
}

class TraceFrame {
  constructor(receiver, message, $arguments, answer, startTime, endTime, children) {
    this.receiver = receiver
    this.message = message
    this.arguments = $arguments
    this.answer = answer
    this.startTime = startTime
    this.endTime = endTime
    this.children = children
  }
}

class TraceReader {
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

class EntityBuilder {
  static forStyle(style = undefined) {
    if (style == undefined) return this.forStyle('flatFDG')

    switch (style) {
      case 'hierarchical': return HierarchicalEntityBuilder
      case 'flatFDG': return FlatFDGEntityBuilder
    }
    throw new Error(`Unknown style: ${style}`)
  }

  static newForStyle(style, trace = undefined) {
    return new (this.forStyle(style))(trace)
  }

  constructor(trace) {
    this.trace = trace
  }
}

class HierarchicalEntityBuilder extends EntityBuilder {
  objectEntities = new Map()
  classEntities = new Map()
  classCategoryEntities = new Map()
  packageEntities = new Map()
  traceEntity = null

  build(traceMap) {
    collect(this.trace.classes).each($class => {
      this.getClassEntity($class)
    })
    collect(this.trace.objects).each(object => {
      this.getObjectEntity(object)
    })

    const traceEntity = this.getTraceEntity()
    traceEntity.sortAllChildren()
    return traceEntity.build(traceMap, entity => entity.layoutChildrenOnGrid())
  }

  getObjectEntity(object) {
    let objectEntity = this.objectEntities.get(object)
    if (objectEntity) return objectEntity

    objectEntity = new ObjectEntity(object)
    this.getClassEntity(object.class).addChild(objectEntity)
    this.objectEntities.set(object, objectEntity)
    return objectEntity
  }

  getClassEntity($class) {
    let classEntity = this.classEntities.get($class)
    if (classEntity) return classEntity

    classEntity = new ClassEntity($class)
    this.getClassCategoryEntity($class.category).addChild(classEntity)
    this.classEntities.set($class, classEntity)
    return classEntity
  }

  getClassCategoryEntity(category) {
    let classCategoryEntity = this.classCategoryEntities.get(category)
    if (classCategoryEntity) return classCategoryEntity

    classCategoryEntity = new ClassCategoryEntity(category)
    this.getPackageEntity(category.package).addChild(classCategoryEntity)
    this.classCategoryEntities.set(category, classCategoryEntity)
    return classCategoryEntity
  }

  getPackageEntity($package) {
    let packageEntity = this.packageEntities.get($package)
    if (packageEntity) return packageEntity

    packageEntity = new PackageEntity($package)
    this.getTraceEntity().addChild(packageEntity)
    this.packageEntities.set($package, packageEntity)
    return packageEntity
  }

  getTraceEntity() {
    if (this.traceEntity) return this.traceEntity

    this.traceEntity = new TraceEntity()
    return this.traceEntity
  }
}

class FlatFDGEntityBuilder extends EntityBuilder {
  excludedObjectNames = []
  excludedClassNames = [
    'Boolean', 'True', 'False',
    'UndefinedObject',
    'SmallInteger', 'LargePositiveInteger', 'LargeNegativeInteger', 'SmallFloat64',
    'FullBlockClosure', 'CompiledBlock', 'CompiledMethod', 'CompiledMethodTrailer',
    'Association',
    'Array', 'OrderedCollection',
    'Point', 'Rectangle'
  ]
  excludeClasses = true
  /** all values may be a factor, a function, or undefined */
  forceWeights = {
	  'references': 1,
	  'organization': {
      /** will be applied to all organization forces */
      'force': .005,
      'sameClass': 2,
      'sameHierarchy': 1,
      'sameCategory': .01,
      'samePackage': .001
	  },
	  'communication': 0.0001
	}

  build(traceMap) {
    const objectEntities = this.trace.objects.filter(object => this.shouldShowObject(object)).map(object => new ObjectEntity(object))
    const traceEntity = new TraceEntity()
    objectEntities.forEach(objectEntity => traceEntity.addChild(objectEntity))
    traceEntity.sortAllChildren()
    this.addConnections(objectEntities)

    const plane = traceEntity.build(traceMap, entity => entity.layoutChildrenOnGrid())

    traceEntity.layoutFDG(traceMap, this.computeForces.bind(this))

    return plane
  }

  shouldShowObject(object) {
    if (this.excludedClassNames.includes(object.class.name)) return false
    if (this.excludedObjectNames.includes(object.name)) return false
    if (this.excludeClasses && object.class.name.endsWith(' class')) return false

    return true
  }

  addConnections(objectEntities) {
    objectEntities.forEach((objectEntity, index) => {
      objectEntities.forEach((otherObjectEntity, otherIndex) => {
        if (index >= otherIndex) return // only traverse upper triangle

        const force = collect(objectEntity.object.fields)
          .filter(field => field === otherObjectEntity.object)
          .count()
          + collect(otherObjectEntity.object.fields)
            .filter(field => field === objectEntity.object)
            .count()
        if (!(force > 0)) return

        objectEntity.addConnection(otherObjectEntity, force)
      })
    })
  }

  computeForces(objectEntities, addForce) {
    const force = (forceWeight, $default) => forceWeight === undefined
      ? force($default)
      : forceWeight instanceof Function
        ? (value) => forceWeight(value ?? 1)
        : (value) => (value ?? 1) * forceWeight

    // references
    if (this.forceWeights['references']) {
      const referenceForce = force(this.forceWeights['references'])
      objectEntities.forEach(objectEntity => {
        const object = objectEntity.object
        objectEntities.forEach(otherObjectEntity => {
          const otherObject = otherObjectEntity.object
          const referenceCount = collect(object.fields).filter(field => field === otherObject).count()
          if (referenceCount > 0) {
            addForce(objectEntity, otherObjectEntity, referenceForce(referenceCount))
          }
        })
      })
    }

    // organization
    if (this.forceWeights['organization']) {
      const organizationForce = force(this.forceWeights['organization']['force'], 1)
      const sameClassForce = force(this.forceWeights['organization']['sameClass'])
      const sameHierarchyForce = force(this.forceWeights['organization']['sameHierarchy'])
      const sameCategoryForce = force(this.forceWeights['organization']['sameCategory'])
      const samePackageForce = force(this.forceWeights['organization']['samePackage'])

      objectEntities.forEach(objectEntity => {
        const object = objectEntity.object
        objectEntities.forEach(otherObjectEntity => {
          const otherObject = otherObjectEntity.object
          let force = 0

          if (sameClassForce) {
            if (object.class === otherObject.class) {
              force += sameClassForce()
            }
          }

          if (sameCategoryForce) {
            if (object.class.category === otherObject.class.category) {
              force += sameCategoryForce()
            }
          }

          if (sameHierarchyForce) {
            if (object.class.category === otherObject.class.category) { // optimization
              const isRegexAST = /^Rxs[A-Z]/.test(object.class.name)
              const otherIsRegexAST = /^Rxs[A-Z]/.test(otherObject.class.name)
              if (isRegexAST && otherIsRegexAST) {
                force += sameHierarchyForce()
              }

              const isRegexNFA = /^Rxm[A-Z]/.test(object.class.name)
              const otherIsRegexNFA = /^Rxm[A-Z]/.test(otherObject.class.name)
              if (isRegexNFA && otherIsRegexNFA) {
                force += sameHierarchyForce()
              }
            }
          }

          if (samePackageForce) {
            if (object.class.category.package === otherObject.class.category.package) {
              force += samePackageForce()
            }
          }

          if (force > 0) {
            addForce(objectEntity, otherObjectEntity, organizationForce(force))
          }
        })
      })
    }

    // communication
    if (this.forceWeights['communication']) {
      const communicationForce = force(this.forceWeights['communication'])
      const visitFrame = (frame) => {
        const senderEntity = objectEntities.find(objectEntity => objectEntity.object === frame.receiver)
        frame.children.forEach(childFrame => {
          const receiverEntity = objectEntities.find(objectEntity => objectEntity.object === childFrame.receiver)
          if (senderEntity != null && receiverEntity != null) {
            addForce(senderEntity, receiverEntity, communicationForce())
          }
          visitFrame(childFrame)
        })
      }
      visitFrame(this.trace.rootFrame)
    }
  }
}

class TraceMap {
  constructor(options = {}) {
    this.options = options
  }

  defaultStyle = 'flatFDG'

  buildMap(domElement) {
    this.scene = new THREE.Scene()

    this.camera = new THREE.PerspectiveCamera()
    // Bird's eye view
    this.camera.position.set(0, 50, 100)
    // increase the far clipping plane to see the whole plane - TODO: make this dynamic
    this.camera.far = 10000

    this.renderer = new THREE.WebGLRenderer()

    this.window = domElement.ownerDocument.defaultView || domElement.ownerDocument.parentWindow
    this.window.traceMap = this
    domElement.appendChild(this.renderer.domElement)
    new ResizeObserver(() => this.updateViewport()).observe(domElement)

    this.buildConsoleInterface()
    this.buildControls()

    this.render()
  }

  buildConsoleInterface() {
    ;[FlatFDGEntityBuilder].forEach($class => {
      this.window[$class.name] = $class
    })
    console.log("%ctrace4d", 'color: #0000ff; font-size: larger; font-weight: bold')
    console.log("%cAdjust the map like this:", 'color: #0000ff')
    console.log(`
traceMap.entityBuilder.forceWeights.references = 0.5
traceMap.entityBuilder.forceWeights.organization.sameClass = 0.1
traceMap.entityBuilder.excludedObjectNames.push("''")
traceMap.entityBuilder.excludedClassNames.push('ByteString')
traceMap.entityBuilder.excludeClasses = false
traceMap.reloadTrace()
`) // , "color: #0000ff"  // WORKAROUND: formatted newlines are not copyable in Chrome Dev Tools
  }

  buildControls() {
    if ((this.options.countFPS ?? false) !== false) {
      this.buildFPSCounter()
    }

    this.buildMapControls()
    this.buildDragControls()
    this.buildMouseHandler()
  }

  buildFPSCounter() {
    this.stats = new Stats()
    this.stats.showPanel(0) // FPS
    this.window.document.body.appendChild(this.stats.dom)
  }

  buildMapControls() {
    this.mapControls = new MapControls(this.camera, this.renderer.domElement)
    this.mapControls.enableDamping = true
    this.mapControls.dampingFactor = 0.05
    this.mapControls.enablePan = true
    this.mapControls.minDistance = 20
    //this.mapControls.maxDistance = 200
    //this.mapControls.maxDistance = 2000
    this.mapControls.enableRotate = true
    // Enforce the camera to be above the ground plane
    this.mapControls.maxPolarAngle = Math.PI / 2 - 0.1
    this.mapControls.addEventListener('change', () => this.render())
  }

  buildDragControls() {
    this.dragControls = new DragControls([], this.camera, this.renderer.domElement)
    this.dragControls.addEventListener('hoveron', (event) => {
      if (!event.object.entity?.wantsDrag?.(event)) return
      event.object.entity?.onDragStart?.(event)
    })
    this.dragControls.addEventListener('hoveroff', (event) => {
      this.dragEntity = null
      if (!event.object.entity?.wantsDrag?.(event)) return
      event.object.entity?.onDragEnd?.(event)
    })
    this.dragControls.addEventListener('drag', (event) => {
      if (!event.object.entity?.wantsDrag?.(event)) return
      this.dragEntity = event.object.entity
      this.lastDragEvent = event
      event.object.entity?.onDrag?.(event)
      this.render()
    })
    this.dragControls.enabled = false
  }

  buildMouseHandler() {
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()
    this.mouseOverEntities = []
    this.focusEntity = null

    this.renderer.domElement.addEventListener('pointermove', event => {
      // required for updating DragControls, see references
      this.lastPointerMoveEvent = event
    })
    this.renderer.domElement.addEventListener('mousemove', event => {
      // required for updating mouseOverEntities, see references
      this.lastMouseMoveEvent = event

      mouse.x = (event.clientX / this.window.innerWidth) * 2 - 1
      mouse.y = -(event.clientY / this.window.innerHeight) * 2 + 1

	    raycaster.setFromCamera(mouse, this.camera)

    	const intersects = raycaster.intersectObjects(this.scene.children, true)

      const oldFocusEntity = this.focusEntity
      const oldMouseOverEntities = this.mouseOverEntities.slice()
      this.mouseOverEntities = intersects.slice().reverse().map(intersect => intersect.object.entity).filter(entity => entity)
      oldMouseOverEntities.forEach(entity => {
        if (!this.mouseOverEntities.includes(entity)) {
          entity.onMouseLeave?.(event)
        }
      })
      this.mouseOverEntities.forEach(entity => {
        if (!oldMouseOverEntities.includes(entity)) {
          entity.onMouseEnter?.(event)
        }
      })

      this.focusEntity = this.mouseOverEntities[this.mouseOverEntities.length - 1]
      if (this.focusEntity !== oldFocusEntity) {
        oldFocusEntity?.onHoverEnd?.(event)
        if (!(event.buttons & MouseButtonFlags.LEFT)) {
          this.focusEntity?.onHoverStart?.(event)
        }
      }

      intersects.some(intersect => {
        intersect.object.entity?.onHover?.(event) !== false
      })

      this.render()
      this.updateCursor()
    }, false)

    let mouseBeforeClick = null
    let isPlainClick = null
    this.renderer.domElement.addEventListener('mousedown', event => {
      mouseBeforeClick = mouse.clone()
      isPlainClick = true
    }, false)
    this.renderer.domElement.addEventListener('mousemove', event => {
      isPlainClick = isPlainClick && mouseBeforeClick.distanceTo(mouse) < 0.01
    }, false)
    this.renderer.domElement.addEventListener('click', event => {
      if (!isPlainClick) return
      isPlainClick = null
      mouseBeforeClick = null

      if (!this.dragEntity && this.focusEntity?.wantsClick?.(event)) {
        this.focusEntity.onClick?.(event)
      }
    }, false)

    this.window.addEventListener('keydown', event => {
      if (event.key === 'Shift') {
        this.mapControls.enabled = false
        this.dragControls.enabled = true

        if (this.dragEntity !== null) return
        if (!this.focusEntity?.wantsDrag?.(event)) return
        this.dragEntity = this.focusEntity
        this.dragEntity?.onDragStart?.(event)

        this.render()
        this.updateCursor(event)
      }
    }, false)
    this.window.addEventListener('keyup', event => {
      if (event.key === 'Shift') {
        this.mapControls.enabled = true
        this.dragControls.enabled = false

        this.dragEntity?.onDragEnd?.(event)
        this.dragEntity = null

        this.render()
        this.updateCursor(event)
      }
    }, false)
  }

  buildTrace(traceEntity) {
    // remove previous trace
    while (this.scene.children.length > 0) {
      this.scene.remove(this.scene.children[0])
    }

    // add lights
    const pointLight1 = new THREE.PointLight(0x888888) // White light
    pointLight1.position.set(200, 100, 200)
    const pointLight2 = new THREE.PointLight(0x888888) // White light
    pointLight2.position.set(-200, 100, 200)
    const pointLight3 = new THREE.PointLight(0x888888) // White light
    pointLight3.position.set(200, 100, -200)
    const pointLight4 = new THREE.PointLight(0x888888) // White light
    pointLight4.position.set(-200, 100, -200)
    this.scene.add(pointLight1, pointLight2, pointLight3, pointLight4)

    /* const ambientLight = new THREE.AmbientLight(0x0000ff, 0.1) // Soft white light
    scene.add(ambientLight) */

    /* const directionalLight = new THREE.DirectionalLight(0xff0000, 0.5)
    directionalLight.position.set(1, 1, 1) // Adjust the position according to your scene
    scene.add(directionalLight) */

    // add debugging
    // add coordinate axes
    const axesHelper = new THREE.AxesHelper( 200 )
    this.scene.add( axesHelper )

    // show the light sources in the scene
    const sphereSize = 1
    const pointLightHelper1 = new THREE.PointLightHelper( pointLight1, sphereSize )
    const pointLightHelper2 = new THREE.PointLightHelper( pointLight2, sphereSize )
    const pointLightHelper3 = new THREE.PointLightHelper( pointLight3, sphereSize )
    const pointLightHelper4 = new THREE.PointLightHelper( pointLight4, sphereSize )
    //const directionalLightHelper = new THREE.DirectionalLightHelper( directionalLight, 5 )
    this.scene.add( pointLightHelper1, pointLightHelper2, pointLightHelper3, pointLightHelper4/* , directionalLightHelper  */)

    this.scene.add(traceEntity)

    this.render()
  }

  //#region loading
  async loadTraceFromServerFile(serverFile, style) {
    return this.loadTrace(await TraceReader.readTraceFromServerFile(serverFile), style)
  }

  async loadTraceFromLocalFile(localFile, style) {
    return this.loadTrace(await TraceReader.readTraceFromLocalFile(localFile), style)
  }

  loadTrace(trace, style = undefined) {
    this.trace = trace

    style ??= this.defaultStyle
    this.entityBuilder = EntityBuilder.newForStyle(style, this.trace)

    this.reloadTrace()
  }

  reloadTrace() {
    const traceEntity = this.entityBuilder.build(this)

    this.buildTrace(traceEntity)
  }

  render() {
    this.renderer.render(this.scene, this.camera)

    this.stats?.update()
  }

  updateCursor(event) {
    let cursor = 'auto'
    if (this.dragControls.enabled) {
      this.mouseOverEntities.forEach(entity => {
        if (this.dragControls.getObjects().some(object => object === entity.object3d)) {
          cursor = 'move'
          return
        }
      })
    } else {
      this.mouseOverEntities.forEach(entity => {
        if (entity.wantsClick(event)) {
          cursor = 'pointer'
          return
        }
      })
    }
    this.renderer.domElement.style.cursor = cursor
  }

  updateViewport() {
    // NOTE: if this becomes to slow, use throttle
    this.renderer.setSize(this.renderer.domElement.parentElement.clientWidth, this.renderer.domElement.parentElement.clientHeight)

    this.camera.aspect = this.renderer.domElement.clientWidth / this.renderer.domElement.clientHeight
    this.camera.updateProjectionMatrix()
  }
}

async function init() {
  const traceMap = new TraceMap()

  const defaultTraceUrl = 'traces/regexParse.json'
  const defaultStyle = 'flatFDG'

  const params = new URLSearchParams(window.location.search)
  const traceUrl = params.get('trace') ?? defaultTraceUrl
  const style = params.get('style') ?? defaultStyle

  const options = Object.fromEntries(params.entries())
  delete options.trace
  delete options.style
  Object.assign(traceMap.options, options)

  traceMap.buildMap(document.getElementById('container'))
  await traceMap.loadTraceFromServerFile(traceUrl, style)
}

await init()
