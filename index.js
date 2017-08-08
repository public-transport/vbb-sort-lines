'use strict'

var parse = require('vbb-parse-line')

var modes = [
	'train',
	'ferry',
	'bus',
	'walking'
]

var compare = function (a, b) {
	var d = modes.indexOf(a.mode) - modes.indexOf(b.mode)
	if (d === 0) {
		var _a = parse(a.name)
		var _b = parse(b.name)

		if (_a.symbol && !_b.symbol) return -1
		if (_b.symbol && !_a.symbol) return 1
		return _a.nr - _b.nr
	}
	return d
}

module.exports = compare
