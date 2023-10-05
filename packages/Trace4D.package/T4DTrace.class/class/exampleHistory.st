documentation
exampleHistory

	(T4DTrace forBlock: ['\w|\d+' asRegex])
		includesHistoricFields: true;
		storeJsonInFileNamed: 'regexParse2.json'.