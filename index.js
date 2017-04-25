'use strict'

const parse = require('vbb-parse-line')

const modes = [
	'train',
	'ferry',
	'bus',
	'walking'
]

const sort = (lines) => lines.sort((a, b) => {
	const d = modes.indexOf(a.mode) - modes.indexOf(b.mode)
	if (d === 0) {
		const _a = parse(a.name)
		const _b = parse(b.name)

		if (_a.symbol && !_b.symbol) return -1
		if (_b.symbol && !_a.symbol) return 1
		return _a.nr - _b.nr
	} else return d
})

module.exports = sort
