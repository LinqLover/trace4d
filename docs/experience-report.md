# Experience Report

> - **Configuration effort:** How many operations are required to reach a usable configuration in terms of filters and forces?
> - **Clarity of entities:** Is the quantity of displayed entities manageable or overwhelming?  
> - **Structure:** Is it possible and easy to identify regions of the object graph? How meaningful are the identified patterns?
> - **Animation:** Is it possible and easy to recognize, follow, and perceive the flow of activity?
> - **Program comprehension:** Is it possible and easy to identify sections of the program execution? How meaningful are the identified patterns?

## Regular expression (`Regex`)

### Regular Expression Parsing (`regexParse.json`)

```
Configuration effort: +
  + no additional configuration required
Clarity of entities: + (26)
Structure: +
  + identified groups: input, AST, NFA
Animation: +
  + manageable, overly consistent speed
  + no noise
  - long delay in hidden dictionaries of RxMatchOptimizer
Program comprehension: +
  + identified sections: parsing, compiling, optimizing
```

### Regular Expression Matching (`regexMatch.json`)

```
Configuration effort: +
  + no additional configuration required
  - wait a few seconds for force simulation to stabilize
Clarity of entities: + (31)
  - too many similar input characters
Structure: +
  + identified groups: input, NFA
Animation: 0
  + overly consistent speed
  + no noise
  - too lengthy animation/too slow speed
Program comprehension: +
  + identified single matches
```

## Morphic UI Framework (`Morphic`)

### Event Handling (`mouseDown.json`)

```
Configuration effort: -
  - required force weights:
      globalFactor = 0.1
  - required object filters:
      excludedClassNames.push('MorphExtension', 'Dictionary')
  - wait many seconds for force simulation to stabilize
Clarity of entities: - (53)
  - too many morphs, too many events with redundant state
  - many irrelevant fields in morphs
  - labels too small when zooming out, poor font quality
  - did not find central button morph
Structure: 0
  + identified groups: kinds of morphs, events
  - overwhelmingly large cluster of morphs
Animation: 0
  + followable
  - too lengthy animation
  - some delays in hidden objects
Program comprehension: 0
  + identified sections: event dispatching
  - not identified receiver morph for event
```

### Layouting (`fullBoundsTextView.json`)

```
Configuration effort: 0
  - required force weights:
      globalFactor = 0.1
Clarity of entities: 0 (29)
  - many irrelevant fields in morphs
  - labels too when zooming out
Structure: +
  + identified groups: central morphs, peripheral state
Animation: 0
  + followable
  - too lengthy animation
Program comprehension: -
  + identified sections: very rough tree traversal
  - not understood tree structure or its implications on layout
```

## Inspection Tool Construction (`inspectorResetFields.json`)

```
Configuration effort: -
  - required force weights:
      repulsion = .4
      communication = 0
      globalFactor = .4
  - required object filters:
      excludedObjectNames.push('an Object')
  - wait many seconds for force simulation to stabilize
Clarity of entities: - (46)
  - too many homogeneous inspector fields
Structure: -
  + identified groups: inspector fields, streams, texts
  - cannot distinguish versions of inspector fields
Animation: -
  - too lengthy animation
  - insufficient frame rate
  - some delays in hidden objects
Program comprehension: -
  + identified sections: very rough traversal of inspector fields
  - not identified different versions/traversals of inspector fields
  - not identified object under inspection
```

## HTML Parsing (`asTextFromHtml.json`)

```
Configuration effort: 0
  - required object filters:
      excludedClassNames.push('ByteString', 'Character')
  - cannot filter on single relevant string
  - required player configuration:
      player.stepsPerSecond = 200
Clarity of entities: + (21)
Structure: +
  + identified groups: parser with stack, text parts, streams
Animation: +
  + followable
  - slightly too lengthy animation
Program comprehension: +
  + identified sections: parsing of HTML tags, pushing/popping of stack, construction of text parts
```
