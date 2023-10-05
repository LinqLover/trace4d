building
buildJson

	| trace objects classes |
	objectIds := PluggableDictionary
		hashBlock: [:a | a t4dIdentityHash]
		equalBlock: [:a :b | a t4dIdentical: b].
	classNames := Dictionary new.
	
	trace := self buildTrace.
	objects := self buildObjects.
	classes := self buildClasses.
	
	^ self makeContainer
		objects: objects;
		classes: classes;
		trace: trace;
		yourself