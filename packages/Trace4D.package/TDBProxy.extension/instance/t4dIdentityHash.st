*Trace4D-comparing
t4dIdentityHash

	memory ifNil: [^ super t4dBasicIdentityHash].
	^ self xxxtdbproxyForward:
		[self t4dBasicIdentityHash]