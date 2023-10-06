# trace4d frontend

## Usage

### Setup

```bash
yarn install
```

### Running (debug mode)

```bash
yarn dev
```

### Building

```bash
yarn build
```

### Running (production mode)

```bash
# (after building)
mkdir dist/traces && cp ../../assets/traces/* dist/traces/
npx http-server dist
```

### Using the Visualization

See [/README.md](../../README.md).

## Package Structure

The frontend consists of two pages:

- `index.html`: Landing page, provides links to some traces, allows to select a local trace file
- `app.html`/`app.js`: Actual visualization using three.js
  - `graph.js`: scene elements (entities for objects, fields, classes, etc.; connections; trail)
  - `map.js`: main logic (scene construction and management, event handling)
  - `player.js`: timeline (player and flame graph)
  - `resizers.js`: helper for attaching resize logic to `.resizer` elements
  - `trace.js`: program trace model (loading, traversing, etc.)
  - `utils/`: helpers for standard libraries, stats.js, three.js, etc.
