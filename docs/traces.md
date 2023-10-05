# Traces

## Regular expression (`Regex`)

### Regular Expression Parsing (`regexParse.json`)

```smalltalk
T4DTrace forBlock:
	['\d|\w+' asRegex].
```

### Regular Expression Matching (`regexMatch.json`)

```smalltalk
matcher := '\d|\w+' asRegex.
T4DTrace forBlock:
	[matcher matchesIn: 'hi, 6 times 7 equal to 42'].
```

## Morphic UI Framework (`Morphic`)

### Event Handling (`mouseDown.json`)

1. Type `self haltOnce`
2. Select > Button for it
3. Inspect button > `self actWhen: #buttonDown`
4. `1 setHaltOnce`
5. Click button
6. Debug > Full stack > select `HandMorph>>#sendMouseEvent:`
7. Restart > Trace it
8. `1 setHaltOnce`
9. Over
10. Inspect TraceDebugger > `T4DTrace forCursor: self cursor`

### Layouting (`fullBoundsTextView.json`)

1. `nil inspect`
2. Halo on bottom code pane > Inspect
3. `self fullBoundsTextView`
4. `T4DTrace forBlock: [self layoutChanged; fullBounds]`

### Full World Cycle (`worldCycle.json`)

```smalltalk
T4DTrace forBlock:
	[Project current world doOneCycleNow].
```

### Text Rendering (`displayScanner.json`)

```smalltalk
T4DTrace forBlock:
	['a\b' withCRs asTextMorph imageForm].
```

## Inspection Tool Construction (`inspectorResetFields.json`)

1. `Color red inspect`
2. Halo on inspector > Inspect model
3. `T4DTrace forBlock: [self resetFields]`

## HTML Parsing (`asTextFromHtml.json`)

```smalltalk
T4DTrace forBlock:
	['<b>Hello <a href="lol">World!</a></b>' asTextFromHtml].
```

## Compiler (`doIt.json`)

```smalltalk
self clearHaltOnce.
T4DTrace forBlock:
	[Compiler evaluate: 'self haltOnce'].
```

## Trivia

### Factorial (`factorial2.json`)

```smalltalk
T4DTrace forBlock:
	[2 factorial].
```

### Non-Local Return (`nonLocalReturn.json`)

```smalltalk
T4DTrace forBlock:
	['123' detect: [:ea | ea = $2]].
```

### Exception Signaling (`zeroDivision.json`)

```smalltalk
T4DTrace forBlock:
	[2 / 0].
```
