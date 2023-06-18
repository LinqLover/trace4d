import collect from 'collect.js'
import * as d3Force from 'd3-force'
import * as d3Random from 'd3-random'
const d3 = { ...d3Force, ...d3Random }
import * as THREE from 'three'
window.THREE = THREE; // threex.dynamictexture.js expects this
import * as THREEx from '../node_modules/threex.dynamictexture/threex.dynamictexture.js'

import Box3Extension from './utils/box3dextension.js'


export class Entity {
  parent = null
  focusStates = []
  connections = []

  //#region accessors
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

  get description() {
    return `${this.name}`
  }

  sortAllChildren() {
    // do nothing
  }
  //#endregion

  //#region building
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
    const cuboidMaterial = new THREE.MeshPhysicalMaterial({ color: 0x00ff00, roughness: 0.8, metalness: 0, /* clearCoat: 0.5, clearCoatRoughness: 0.5 */ })
    //const cuboidMaterial = new THREE.MeshStandardMaterial({ color: 'purple' })
    /* // specular material
    const cuboidMaterial = new THREE.MeshPhongMaterial({
      color: this.constructor.color, // Green color
      specular: 0xffffff, // White specular reflection
      shininess: 1 // Controls the size of the specular highlight (higher values = smaller highlight)
      , flatShading: false
    })
 */
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
  //#endregion

  //#region dynamic state
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
  //#endregion

  //#region interaction
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
  //#endregion
}

export class OrganizationEntity extends Entity {
  children = []
  childConnections = []

  static color = 0x008000
  static hoverColor = 0xff0000

  constructor(organization) {
    super()
    this.organization = organization
  }

  //#region accessors
  get name() {
    return this.organization.name
  }
  //#endregion

  //#region composition
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
  //#endregion

  //#region building
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
    let i = 0
    const n = this.children.length
    const childObjects = this.children.map(child => {
      if (i++ % 100 == 0) console.log(`${i} / ${n}`)
      return child.build(traceMap, layoutFunction)
    })
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
  //#endregion

  //#region layout
  adoptSize(width, depth) {
    this.cuboid.geometry = new THREE.BoxGeometry(width, 10, depth)
  }

  layoutChildrenOnGrid() {
    const childObjects = this.object3d.children
    if (childObjects.length == 0) return

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
        child.geometry.parameters.height / 2,
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

    const d3Nodes = this.children.map((child, index) => {
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
    this.simulation = d3.forceSimulation(d3Nodes)
    this.simulation
      // strive to center
      .force('x', d3.forceX().strength(centripetalForce))
      .force('y', d3.forceY().strength(centripetalForce))

      // individual forces
      .force('link', d3.forceLink(forces)
        .id(d3Node => d3Node.index)
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
        .radius(d3Node => d3Node.radius)
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
          child.moveTo(child.d3Node.x, child.object3d.geometry.parameters.height / 2, child.d3Node.y)
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
        const width = Math.max(collect(d3Nodes).map(d3Node => d3Node.x).max(), -collect(d3Nodes).map(d3Node => d3Node.x).min()) * 2
        const depth = Math.max(collect(d3Nodes).map(d3Node => d3Node.y).max(), -collect(d3Nodes).map(d3Node => d3Node.y).min()) * 2
        this.adoptSize(width + margin, depth + margin)

        traceMap.render()
      })
      .restart()


    // center nodes
    const dx = (collect(d3Nodes).map(d3Node => d3Node.x).min() + collect(d3Nodes).map(d3Node => d3Node.x).max()) / 2
    const dy = (collect(d3Nodes).map(d3Node => d3Node.y).min() + collect(d3Nodes).map(d3Node => d3Node.y).max()) / 2
    d3Nodes.forEach(d3Node => {
      d3Node.x -= dx
      d3Node.y -= dy
    })

    // apply positions
    this.children.forEach(child => {
      child.moveTo(child.d3Node.x, child.object3d.geometry.parameters.height, child.d3Node.y)
    })

    const size = new THREE.Box3().setFromObject(this.object3d).getSize(new THREE.Vector3())
    const margin = 10
    this.adoptSize(size.x + margin, size.z + margin)
  }
  //#endregion

  //#region interaction
  onChildStartDrag() {
    if (!this.simulation) return

    // reheat
    this.simulation.alpha(1)
    this.simulation.restart()
  }
  //#endregion
}

export class TraceEntity extends OrganizationEntity {
  static planeMaterial = new THREE.MeshBasicMaterial({ color: 0x222222 })

  //#region accessors
  get object3d() {
    return this.plane
  }

  get depth() {
    return this.plane.geometry.parameters.height // because of rotation
  }
  //#endregion

  //#region building
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
  //#endregion

  //#region layout
  adoptSize(width, depth) {
    this.plane.geometry = new THREE.PlaneGeometry(width, depth).rotateX(-Math.PI / 2)
  }
  //#endregion

  //#region interaction
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
  //#endregion
}

export class PackageEntity extends OrganizationEntity {
  static color = 0x200000
  static hoverColor = 0x300000
  static dragColor = 0x400000

  constructor($package) {
    super($package)
  }
}

export class ClassCategoryEntity extends OrganizationEntity {
  static color = 0x201000
  static hoverColor = 0x300800
  static dragColor = 0x402000

  constructor(category) {
    super(category)
  }
}

export class ClassEntity extends OrganizationEntity {
  static color = 0x202000
  static hoverColor = 0x303000
  static dragColor = 0x404000

  constructor($class) {
    super($class)
  }
}

export class ObjectEntity extends Entity {
  static color = 0x002000
  static hoverColor = 0x003000
  static dragColor = 0x004000

  constructor(object) {
    super()
    this.object = object
  }

  //#region accessors
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
  //#endregion
}

export class Connection {
  focusStates = []

  static color = 0xffffff
  static opacity = .5
  static hoverOpacity = 1

  constructor(source, target, strength) {
    this.source = source
    this.target = target
    this.strength = strength
  }

  //#region building
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
  //#endregion

  //#region dynamic state
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
  //#endregion
}
