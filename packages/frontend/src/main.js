import collect from 'collect.js'
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

  get object3d() {
    return this.cuboid
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

  build(traceMap) {
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
    const text = this.name

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

  setFocusState(state) {
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
  }

  wantsClick(event) {
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
    alert(this.name)
  }

  onDragStart(event) {
    this.object3d.positionBeforeDrag = this.object3d.position.clone()
  }

  onDragEnd(event) {
    this.unsetFocusState('drag')
    delete this.object3d.positionBeforeDrag
  }

  onDrag(event) {
    this.setFocusState('drag')

    if (!this.object3d.positionBeforeDrag) {
      console.warn('no positionBeforeDrag', this)
      return
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
      return
    }

    const absWidth = (this.parent.width - this.width) / 2
    const absDepth = (this.parent.depth - this.depth) / 2
    this.object3d.position.x = Math.max(-absWidth, Math.min(absWidth, this.object3d.position.x))
    this.object3d.position.z = Math.max(-absDepth, Math.min(absDepth, this.object3d.position.z))

    this.object3d.positionBeforeDrag = this.object3d.position.clone()
  }
}

class OrganizationEntity extends Entity {
  constructor(organization) {
    super()
    this.organization = organization
    this.children = []
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

  build(traceMap) {
    this.buildObject3d(traceMap)

    this.buildChildren(traceMap)
    this.layoutChildren()

    this.buildLabel(traceMap)

    traceMap.dragControls.getObjects().push(this.cuboid)
    this.cuboid.entity = this
    return this.cuboid
  }

  buildChildren(traceMap) {
    const childObjects = this.children.map(child => child.build(traceMap))
    if (childObjects.length == 0) return

    this.object3d.add(...childObjects)
  }

  adoptSize(width, depth) {
    this.cuboid.geometry = new THREE.BoxGeometry(width, 10, depth)
  }

  layoutChildren() {
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
}

class TraceEntity extends OrganizationEntity {
  static planeMaterial = new THREE.MeshBasicMaterial({ color: 0x222222 })

  get object3d() {
    return this.plane
  }

  get depth() {
    return this.plane.geometry.parameters.height // because of rotation
  }

  build(traceMap) {
    const planeGeometry = new THREE.PlaneGeometry(100, 100)
    planeGeometry.rotateX(-Math.PI / 2)
    this.plane = new THREE.Mesh(planeGeometry, this.constructor.planeMaterial)
    this.plane.entity = this

    this.buildChildren(traceMap)
    this.layoutChildren()

    return this.plane
  }

  adoptSize(width, depth) {
    this.plane.geometry = new THREE.PlaneGeometry(width, depth).rotateX(-Math.PI / 2)
  }

  wantsClick(event) {
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

class HierarchicalEntityBuilder {
  objectEntities = new Map()
  classEntities = new Map()
  classCategoryEntities = new Map()
  packageEntities = new Map()
  traceEntity = null

  constructor(trace) {
    this.trace = trace
  }

  build() {
    collect(this.trace.classes).each($class => {
      this.getClass($class)
    })
    collect(this.trace.objects).each(object => {
      this.getObject(object)
    })

    const traceEntity = this.getTraceEntity()
    traceEntity.sortAllChildren()
    return traceEntity
  }

  getObject(object) {
    let objectEntity = this.objectEntities.get(object)
    if (objectEntity) return objectEntity

    objectEntity = new ObjectEntity(object)
    this.getClass(object.class).addChild(objectEntity)
    this.objectEntities.set(object, objectEntity)
    return objectEntity
  }

  getClass($class) {
    let classEntity = this.classEntities.get($class)
    if (classEntity) return classEntity

    classEntity = new ClassEntity($class)
    this.getClassCategory($class.category).addChild(classEntity)
    this.classEntities.set($class, classEntity)
    return classEntity
  }

  getClassCategory(category) {
    let classCategoryEntity = this.classCategoryEntities.get(category)
    if (classCategoryEntity) return classCategoryEntity

    classCategoryEntity = new ClassCategoryEntity(category)
    this.getPackage(category.package).addChild(classCategoryEntity)
    this.classCategoryEntities.set(category, classCategoryEntity)
    return classCategoryEntity
  }

  getPackage($package) {
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

class TraceMap {
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

    this.buildControls()

    this.render()
  }

  buildControls() {
    this.buildMapControls()
    this.buildDragControls()
    this.buildMouseHandler()
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
      event.object.entity?.onDragStart?.(event)
    })
    this.dragControls.addEventListener('hoveroff', (event) => {
      this.dragEntity = null
      event.object.entity?.onDragEnd?.(event)
    })
    this.dragControls.addEventListener('drag', (event) => {
      this.dragEntity = event.object.entity
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

    this.renderer.domElement.addEventListener('mousemove', event => {
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


    this.scene.add(traceEntity.build(this))

    this.render()
  }

  async loadTraceFromServerFile(serverFile) {
    return this.loadTrace(await TraceReader.readTraceFromServerFile(serverFile))
  }

  async loadTraceFromLocalFile(localFile) {
    return this.loadTrace(await TraceReader.readTraceFromLocalFile(localFile))
  }

  loadTrace(trace) {
    this.trace = trace
    const traceEntity = new HierarchicalEntityBuilder(this.trace).build()
    this.buildTrace(traceEntity)
  }

  render() {
    this.renderer.render(this.scene, this.camera)
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
  traceMap.buildMap(document.getElementById('container'))

  let traceUrl = new URLSearchParams(window.location.search).get('trace')
  traceUrl ??= 'traces/regexParse.json'
  await traceMap.loadTraceFromServerFile(traceUrl)
}

await init()
