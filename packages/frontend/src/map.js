import collect from 'collect.js'
import { DragControls } from 'three/addons/controls/DragControls.js'
import { MapControls } from 'three/addons/controls/MapControls.js'
import Stats from 'stats.js'
import * as THREE from 'three'

import * as statsLogs from './utils/statsLogs.js'

import { ClassCategoryEntity, ClassEntity, FieldEntity, ObjectEntity, PackageEntity, TraceEntity } from './graph.js'
import { Player, Timeline } from './player.js'
import { TraceReader } from './trace.js'


const MouseButtonFlags = {
  LEFT: 1,
  MIDDLE: 2,
  RIGHT: 4,
  BACK: 8,
  FORWARD: 16
}

export class EntityBuilder {
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

  buildAllFieldEntities(object, parentEntity) {
    let fields = collect(object.fields)
    const maxFields = 20
    fields = fields.take(maxFields)
    return fields.map((field, name) => {
      return this.buildFieldEntities(name, field, parentEntity)
    })
  }

  buildFieldEntities(name, field, parentEntity) {
    let primary = null
    const fieldEntities = ['front', 'left', 'back', 'right'].map(direction => {
      const fieldEntity = new FieldEntity(name, field)
      fieldEntity.side = direction
      if (primary === null) {
        primary = fieldEntity
      } else {
        fieldEntity.primary = primary
      }
      parentEntity.addChild(fieldEntity)
      return fieldEntity
    })
    fieldEntities.forEach(fieldEntity => {
      fieldEntity.twins = fieldEntities.filter(otherFieldEntity => otherFieldEntity !== fieldEntity)
    })
    return fieldEntities
  }
}

export class HierarchicalEntityBuilder extends EntityBuilder {
  allFieldEntities = new Map()
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

      const maxFields = 20
      collect(object.fields).take(maxFields).each((field, name) => {
        this.getFieldEntities(name, field, object)
      })
    })

    const traceEntity = this.getTraceEntity()
    traceEntity.sortAllChildren()
    return traceEntity.build(traceMap)
  }

  getFieldEntities(name, field, object) {
    let fieldEntities = this.allFieldEntities.get(field)
    if (fieldEntities) return fieldEntities

    const objectEntity = this.getObjectEntity(object)
    this.buildFieldEntities(name, field, objectEntity)
    this.allFieldEntities.set(field, fieldEntities)
    return fieldEntities
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

    this.traceEntity = new TraceEntity(this.trace)
    return this.traceEntity
  }
}

export class FlatFDGEntityBuilder extends EntityBuilder {
  excludedObjectNames = []
  excludedClassNames = [
    'Boolean', 'True', 'False',
    'UndefinedObject',
    'SmallInteger', 'LargePositiveInteger', 'LargeNegativeInteger', 'SmallFloat64',
    'FullBlockClosure', 'CompiledBlock', 'CompiledMethod', 'CompiledMethodTrailer',
    'Array', 'OrderedCollection',
    'Bitmap', 'Point', 'Rectangle',
    'ByteSymbol',
    'Process', 'ProcessorScheduler', 'Mutex',
    'Association', 'DependentsArray', 'Heap', 'IdentityDictionary', 'IdentitySet', 'Interval', 'SparseLargeTable', 'WeakArray', 'WeakIdentityKeyDictionary', 'WeakKeyAssociation', 'WeakSet', 'WeakValueAssociation',
    'Environment'
  ]
  excludeClasses = true
  /** all values may be a factor, a function, or undefined */
  forceWeights = {
    references: 1,
    organization: {
      /** will be applied to all organization forces */
      force: .005,
      sameClass: 2,
      sameHierarchy: 1,
      sameCategory: .01,
      samePackage: .001
    },
    communication: 0.0001,
    globalFactor: 1,
    repulsion: .2
  }

  build(traceMap) {
    const objectEntities = this.trace.objects
      .filter(object => this.shouldShowObject(object))
      .map(object => this.buildObjectEntity(object))
    const traceEntity = new TraceEntity(this.trace)
    objectEntities.forEach(objectEntity => traceEntity.addChild(objectEntity))
    traceEntity.sortAllChildren()
    this.addConnections(objectEntities)

    const plane = traceEntity.build(traceMap)

    traceEntity.layoutFDG(traceMap, this.computeForces.bind(this))

    return plane
  }

  shouldShowObject(object) {
    if (this.excludedClassNames.includes(object.class.name)) return false
    if (this.excludedObjectNames.includes(object.name)) return false
    if (this.excludeClasses && object.class.name.endsWith(' class')) return false

    return true
  }

  buildObjectEntity(object) {
    const entity = new ObjectEntity(object)
    this.buildAllFieldEntities(object, entity)
    return entity
  }

  addConnections(objectEntities) {
    objectEntities.forEach(objectEntity => {
      objectEntities.forEach(otherObjectEntity => {
        collect(objectEntity.object.fields).each((field, name) => {
          if (field === otherObjectEntity.object) {
            objectEntity.addConnection(name, otherObjectEntity, 1)
          }
        })
      })
    })
  }

  computeForces(objectEntities, addForce) {
    const force = (forceWeight, $default) => forceWeight === undefined
      ? force($default)
      : forceWeight instanceof Function
        ? (value) => forceWeight(value ?? 1) * (this.forceWeights['globalFactor'] ?? 1)
        : (value) => (value ?? 1) * forceWeight * (this.forceWeights['globalFactor'] ?? 1)

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
              // TODO HACK: regex-specific! implement common superclasses force instead.
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

export class TraceMap {
  constructor(options = {}) {
    this.options = options
  }

  defaultStyle = 'flatFDG'

  //#region building
  buildMap(domElement) {
    this.scene = new THREE.Scene()

    this.camera = new THREE.PerspectiveCamera()
    // Bird's eye view
    this.camera.position.set(0, 50, 100)
    // increase the far clipping plane to see the whole plane - TODO: don't hardcode
    this.camera.far = 10000

    this.renderer = new THREE.WebGLRenderer()

    this.window = domElement.ownerDocument.defaultView || domElement.ownerDocument.parentWindow
    this.window.traceMap = this

    const threeElement = domElement.querySelector('#three')
    threeElement.appendChild(this.renderer.domElement)
    new ResizeObserver(() => this.updateViewport()).observe(threeElement)

    this.buildConsoleInterface()
    this.buildControls()
    this.buildScene()
    const playerElement = domElement.querySelector('#player')
    this.buildPlayer(playerElement)

    this.renderer.setAnimationLoop(() => this.render())
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
traceMap.entityBuilder.forceWeights.globalFactor = 0.5
traceMap.entityBuilder.forceWeights.repulsion = 0.3
traceMap.entityBuilder.excludedObjectNames.push("''")
traceMap.entityBuilder.excludedClassNames.push('ByteString')
traceMap.entityBuilder.excludeClasses = false
traceMap.reloadTrace()

traceMap.player.stepsPerSecond = 100
`) // , "color: #0000ff"  // WORKAROUND: formatted newlines are not copyable in Chrome Dev Tools
  }

  buildControls() {
    if ((this.options.countFPS ?? false) !== false) {
      this.buildFPSCounter()
    }

    this.buildMapControls()
    this.buildDragControls()
    this.buildMouseHandler()
    this.buildKeyboardHandler()
  }

  buildFPSCounter() {
    statsLogs.logging(((this.options.measureFPS ?? false) !== false))

    this.stats = new Stats()
    this.stats.showPanel(0) // FPS
    this.window.document.body.appendChild(this.stats.dom)

    this.stats.logs = statsLogs.logs
  }

  buildMapControls() {
    this.mapControls = new MapControls(this.camera, this.renderer.domElement)
    this.mapControls.enableDamping = false
    this.mapControls.enablePan = true
    this.mapControls.minDistance = 20
    //this.mapControls.maxDistance = 200
    //this.mapControls.maxDistance = 2000
    this.mapControls.enableRotate = true
    // Enforce the camera to be above the ground plane
    this.mapControls.maxPolarAngle = Math.PI / 2 - 0.1
    this.mapControls.zoomToCursor = true

    this.mapControls.addEventListener('change', () => this.updateScene())
    this.mapControls.keyPanSpeed = 20
    this.mapControls.listenToKeyEvents(this.window.document)
  }

  buildDragControls() {
    // BUG: Should not be able to drag children of draggable, but DragControls always passes recursive=true to raycaster.
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
      this.lastDragEvent = event
      event.object.entity?.onDrag?.(event)
      this.updateScene()
    })
    this.dragControls.enabled = false
  }

  registerDraggable(object3d) {
    this.dragControls.getObjects().push(object3d)
  }

  unregisterDraggable(object3d) {
    const index = this.dragControls.getObjects().indexOf(object3d)
    if (index >= 0) {
      this.dragControls.getObjects().splice(index, 1)
    }
  }

  buildMouseHandler() {
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()
    this.mouseOverEntities = []
    this.focusEntity = null

    this.renderer.domElement.addEventListener('pointermove', event => {
      // required for updating DragControls, see references
      this.lastPointerMoveEvent = event

      mouse.x = (event.clientX / this.window.innerWidth) * 2 - 1
      mouse.y = -(event.clientY / this.window.innerHeight) * 2 + 1

	    raycaster.setFromCamera(mouse, this.camera)

        const intersects = raycaster.intersectObjects(this.hoverableObject3ds ?? [], false)

      const oldFocusEntity = this.focusEntity
      const oldMouseOverEntities = this.mouseOverEntities.slice()
      this.mouseOverEntities = intersects.slice().reverse()
        .map(intersect => intersect.object.entity)
        .filter(entity => entity?.wantsMouse?.(event))
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

      if (this.dragControls.enabled && !this.dragEntity) {
        // fix dragEntity (might be null when positioning cursor over entity before pressing shift)
        this.dragEntity = this.focusEntity
        this.dragEntity?.onDragStart?.(event)
      }

      this.updateCursor()
    }, { capture: true })
    this.renderer.domElement.parentElement.addEventListener('mousemove', event => {
      // required for updating mouseOverEntities, see references
      this.lastMouseMoveEvent = event
    }, { capture: true })

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

        this.updateCursor(event)
      }
    }, false)
    this.window.addEventListener('keyup', event => {
      if (event.key === 'Shift') {
        this.mapControls.enabled = true
        this.dragControls.enabled = false

        this.dragEntity?.onDragEnd?.(event)
        this.dragEntity = null

        this.updateCursor(event)
      }
    }, false)
  }

  buildKeyboardHandler() {
    this.window.addEventListener('keydown', event => {
      const action = {
        ' ': () => this.togglePlaying(),
        Escape: () => this.stopForceSimulation(),
        Home: () => this.resetPlayer()
      }[event.key]
      if (!action) return

      event.preventDefault()
      action()
    }, false)
  }

  buildScene() {
    // add lights
    const directionalLight1 = new THREE.DirectionalLight(0xffffee, 4)
    // TODO: don't hardcode sizes
    directionalLight1.position.set(250, 300, 200)
    directionalLight1.castShadow = true
    directionalLight1.shadow.camera.left = -400
    directionalLight1.shadow.camera.right = 400
    directionalLight1.shadow.camera.top = 400
    directionalLight1.shadow.camera.bottom = -400
    //directionalLight1.shadow.bias = -0.0000001
    directionalLight1.shadow.mapSize.width = 4096
    directionalLight1.shadow.mapSize.height = 4096
    this.scene.add(directionalLight1)

    const skyColor = 0x87ceeb
    const skyLightColor = 0xeaeafa
    const groundColor = 0xbadea6
    const groundLightColor = 0xbababa
    const hemisphereLight = new THREE.HemisphereLight(skyLightColor, groundLightColor, 2.2)
    this.scene.add(hemisphereLight);

    // add ground
    const ground = new THREE.Mesh(
      new THREE.CircleGeometry(100000, 64),
      new THREE.MeshStandardMaterial({ color: groundColor, roughness: 1, metalness: 0, flatShading: true })
    )
    ground.rotation.x = -Math.PI / 2
    ground.position.y = -10
    this.scene.add(ground)

    this.renderer.setClearColor(skyColor)
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap

    this.updateScene()
  }

  buildPlayer(domElement) {
    this.player = new Player(domElement)
    const timelineElement = domElement.querySelector('#timeline')
    this.timeline = new Timeline(timelineElement)

    this.player.on('step', () => this.timeline.time = this.player.cursor.currentTime)
    {
      let wasPlaying = false
      this.timeline.on('startDrag', () => {
        wasPlaying = this.player.isPlaying
        this.player.pause()
      })
      this.timeline.on('endDrag', () => {
        if (wasPlaying) {
          this.player.resume()
        }
      })
    }
    // NB: if this gets too slow, debounce updates
    this.timeline.on('time', () => this.player.currentTime = this.timeline.time)
  }

  buildTrace(traceObject3d) {
    if (this.traceEntity) {
      this.stopForceSimulation()
      this.scene.remove(this.traceEntity.object3d)
      this.player.off('isPlaying', this.traceEntity.mapSyncTrailToPlayer)
    }

    this.traceEntity = traceObject3d.entity
    this.scene.add(traceObject3d)
    this.player.trail = this.traceEntity.trail

    this.player.on('isPlaying', this.traceEntity.mapSyncTrailToPlayer = isPlaying => {
      this.traceEntity.trail.deferUpdates = /* !isPlaying */ false
      // TODO: reenabling deferUpdates would be great but is only possible when hiding the trail
    })

    this.initHoverableObjects()

    this.updateScene()
  }

  initHoverableObjects() {
    const pending = [...this.scene.children]
    this.hoverableObject3ds = []
    while (pending.length > 0) {
      const object = pending.pop()
      if (object.visible === false) continue
      if (!object.entity) continue
      if (object.entity.wantsMouse && !object.entity.wantsMouse()) continue
      this.hoverableObject3ds.push(object)
      pending.push(...object.children)
    }
  }
  //#endregion

  //#region loading
  async loadTraceFromServerFile(serverFile, style) {
    return await this.loadTrace(TraceReader.readTraceFromServerFile(serverFile), style)
  }

  async loadTraceFromLocalFile(localFile, style) {
    return await this.loadTrace(TraceReader.readTraceFromLocalFile(localFile), style)
  }

  loadTrace(trace, style = undefined) {
    return this.beBusyDuring(async () => {
      this.trace = await trace

      style ??= this.defaultStyle
      this.entityBuilder = EntityBuilder.newForStyle(style, this.trace)

      await this.reloadTrace()
    })
  }

  reloadTrace() {
    return this.beBusyDuring(async () => {
      if (this.player) {
        this.player.reset()
      }

      const traceObject3d = this.entityBuilder.build(this)

      this.buildTrace(traceObject3d)

      this.reloadPlayer()

      this.traceEntity.trail.deferUpdates = true
      if (this.options.autoStart ?? false) {
        setTimeout(() => this.player.start(), 3000)
      }
    })
  }

  reloadPlayer() {
    this.player.setToTrace(this.trace, this.traceEntity)

    this.timeline.minTime = this.player.cursor.startTime
    this.timeline.maxTime = this.player.cursor.endTime
  }

  async beBusyDuring(fn) {
    if (this.mouseCursor === 'wait') return await fn()

    const previousMouseCursor = this.mouseCursor
    this.mouseCursor = 'wait'
    const previousCursor = this.renderer.domElement.style.cursor
    this.renderer.domElement.style.cursor = this.mouseCursor
    try {
      return await fn()
    } finally {
      if (this.mouseCursor === 'wait') {
        this.mouseCursor = 'progress'
        this.renderer.domElement.style.cursor = this.mouseCursor
        setTimeout(() => {
          if (this.mouseCursor === 'progress') {
            this.mouseCursor = previousMouseCursor
            this.renderer.domElement.style.cursor = previousCursor
          }
        }, 0)
      } else {
      }
    }
  }
  //#endregion

  //#region actions
  stopForceSimulation() {
    this.traceEntity.stopForceSimulation()
  }

  resetPlayer() {
    this.player.reset()
  }

  togglePlaying() {
    this.player.togglePlaying()
  }
  //#endregion

  //#region updating
  updateScene() {
    this.renderRequired = true
  }

  render() {
    if (this.renderRequired) {
      this.renderer.render(this.scene, this.camera)
      this.renderRequired = false

      this.renderedNow()
    }

    this.mapControls?.update()

    this.stats?.update()
  }

  renderedNow() {
    if ((this.options.measureStartTime ?? false) !== false && window.loadStartTime && this.player?.trail) {
      const startTime = window.loadStartTime
      delete window.loadStartTime
      // to appear after current frame
      setTimeout(() => {
        const timeToLoad = performance.now() - startTime
        alert("time to load: " + timeToLoad)
      }, 0)
    }
  }

  updateCursor(event) {
    if (this.mouseCursor) return this.mouseCursor

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

    this.updateScene()
  }
  //#endregion
}
