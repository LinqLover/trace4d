building
buildObjectFor: anObject

	| fields container |
	(self isHugeObject: anObject) ifTrue: [^ nil].
	
	fields := self fieldsFor: anObject.
	container := self makeContainer
		class: (self nameForClass: (anObject perform: #class));
		name: (self stringFor: anObject);
		fields:
			(fields
				collect: [:field | field key -> (self idOrStringFor: (field value value: anObject))]
				as: self containerClass);
		yourself.
	self includesHistoricFields ifTrue:
		[container historicFields:
			(fields
				collect: [:field | field key -> (self buildFieldHistoryFor: anObject field: field value)]
				as: self containerClass)].
	^ container