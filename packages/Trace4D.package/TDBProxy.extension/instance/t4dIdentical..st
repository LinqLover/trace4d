*Trace4D-comparing
t4dIdentical: anObject

	memory ifNil: [^ super t4dBasicIdentical: anObject].
	^ self xxxtdbproxyForward:
		[self t4dBasicIdentical: anObject]