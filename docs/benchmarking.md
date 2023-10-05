# Benchmarking

## Backend (Squeak)

```smalltalk
"Tracer"
[cursor := TDBCursor traceForBlock: aBlock]
	timeToRunWithoutGC.

"Serializer"
[(T4DTrace forCursor: cursor) storeJsonInFileNamed: 'test.json']
	timeToRunWithoutGC.

"Serialization"
(FileDirectory default / 'test.json') size.
```

## Frontend (THREE.js)

General setup:

- Build trace4d (`yarn build`) and run it locally (`npx http-server`)
- Open the visualization in a new Chrome process (ideally, with a new profile without other windows or extensions)
- Keep the Chrome DevTools closed between the measurements
- Invoke each visualization from a blank page (`about:blank`) to avoid GC effects
- Configure each visualization with the parameters described in the [experience report](./experience-report.md)
- Run each measurement 3 times and take the best result

### Start-up times

Run trace4d with the `?measureStartTime` query parameter.

### Rendering times

Run trace4d with the `?countFPS&measureFPS` query parameters.

#### Frame rate during force simulation

Run the force simulation for 30 seconds and take the average frame rate:

```js
traceMap.stats.logs().FPS.slice(2, 30)
```

#### Frame rate during animation

Stop the force simulation after 10 seconds, then run the animation for 30 seconds and take the average frame rate:

```js
traceMap.stats.logs().FPS.slice(23, 53)
```

### Memory consumption

Use the Chrome Task manager to measure the memory consumption:

1. Open the Chrome Task Manager and locate the trace4d process and the GPU process
2. Log the initial memory consumption of the GPU process
3. Invoke the visualization, stop the force simulation after 10 seconds, and play the entire animation
4. Log the final memory consumption of the GPU process and record the difference
5. Log the memory consumption of the trace4d process

For each memory measurement, wait 30 seconds for the memory consumption to stabilize and report the minimum value.
