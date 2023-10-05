# Ideas

A smorgasboard of ideas for future work on this project.

For a condensed summary of open research questions, read the conclusion of our [paper](docs/paper/).

## Filtering

- add filters for object fields
- automatically identify irrelevant fields
- aggregate objects
- restore references from/to filtered objects (e.g., for OrderedCollections/Dictionarys)
- interactive filtering in scene (how to deal with local layout? button to restart the simularion?)

## Serializer

- convenience: progress displays (objects, children)
- optimizations:
  - improve start-up time of range retracing simulator (https://github.com/hpi-swa-lab/squeak-tracedebugger/issues/82)
  - NB: currently, every inspector field is streamed twice!
- new data: creation time of objects (and maybe gc time?) (https://github.com/hpi-swa-lab/squeak-tracedebugger/issues/31)
- domain-specific data: object labels (`#t4dLabel`), filter presets, structural hints (e.g., field names relevant to design pattern such as composite/graph)
  - label examples: do not leak items of a collection, regex AST/NFA labels (`#rxvLabel`, https://github.com/LinqLover/Regex-Tools), ...
- actually collect class hierarchies for true generic common superclass force!

## Visualization

### Performance

- dynamic quality (e.g., texture resolution, number of triangles) depending on hardware/system load
- Level of Detail (LOD): ???
- customizable force simulation speed (trade-off between time to stability and smoothness)
- systematically try to reduce number of geometries/triangles (see `traceMap.renderer.info`)
- [if ever required] optimize trace cursor through indices or binary/exponential search (currently handles 100 steps/frame smoothly, not yet tried anything faster) (see also https://github.com/hpi-swa-lab/squeak-tracedebugger/issues/17#:~:text=rolling%20out%20an-,exponential%20search,-mechanism.%20For%20this)

### Convenience

- progress bar for loading traces (simple HTML element)
- store/load configuration (filters and weights)
  - as URL parameters?
- landing page?
- drag-and-drop of entities: honor camera perspective (current implementation uses event coordinates of viewport)
- smooth zooming (through mouse wheel?)
- world-in-hand navigation (e.g., rotateAroundCursor - currently not supported by OrbitControls)
- player: control speed, hierarchical navigation (step over button/ctrl + right, ...)?, reset layout?, display key bindings?
- fix mobile support: resizable timeline (or small expand/collapse button/handle), entity dragging
- horizontal/vertical zooming in flamegraph?
- search for objects/fields/messages
- hovercard/side panel for object details?

### Visual Mapping

- color-code objects by groups (classes, clusters, ...)? how to combine with activation color?
- hovering:
  - when hovering field, highlight of ingoing references to object is confusing
  - during hovering, make unrelated objects translucent or hide other arrows?
- fields:
  - fix layout of object side labels (unnecessary large, wrong scaling)
  - improve density of fields (50% of space is wasted)
  - for fields with arrows, hide field value?
  - linebreaks in fields? (strategy: diy inspired by three.js dynamic texture)
  - emphasize label names?
- vertical positioning of nodes (hill structure based on graph density/force field?)

## Technical Debt

- frontend/graph: source of truth not always clear (width/height/depth vs constructor, implement real setters?)
