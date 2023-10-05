building
isHugeObject: anObject

	^ ((anObject isKindOf: Dictionary orOf: DependentsArray) or: [anObject isKindOf: WeakSet])
		and: [anObject size > 100]