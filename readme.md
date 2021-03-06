# vbb-sort-lines

**Sort VBB lines by their importance.** Implements a heuristic to sort lines based on their mode of transport and name.

[![npm version](https://img.shields.io/npm/v/vbb-sort-lines.svg)](https://www.npmjs.com/package/vbb-sort-lines)
[![build status](https://img.shields.io/travis/public-transport/vbb-sort-lines.svg)](https://travis-ci.org/public-transport/vbb-sort-lines)
![ISC-licensed](https://img.shields.io/github/license/public-transport/vbb-sort-lines.svg)
[![chat on gitter](https://badges.gitter.im/public-transport.svg)](https://gitter.im/public-transport)


## Installing

```shell
npm install vbb-sort-lines
```


## Usage

`sortLines` compares two `line`s in [*Friendly Public Transport Format*](https://github.com/public-transport/friendly-public-transport-format), so that it works with [Array.prototype.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).

```js
const sortLines = require('vbb-sort-lines')

console.log([
	{type: 'line', id: '1', name: '11', mode: 'train'},
	{type: 'line', id: '5', name: '300', mode: 'bus'},
	{type: 'line', id: '2', name: '100', mode: 'train'},
	{type: 'line', id: '4', name: 'M45', mode: 'bus'},
	{type: 'line', id: '3', name: '10', mode: 'ferry'}
].sort(sortLines))
```

```js
[
	{type: 'line', id: '1', name: '11', mode: 'train'},
	{type: 'line', id: '2', name: '100', mode: 'train'},
	{type: 'line', id: '3', name: '10', mode: 'ferry'},
	{type: 'line', id: '4', name: 'M45', mode: 'bus'},
	{type: 'line', id: '5', name: '300', mode: 'bus'}
]
```


## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/public-transport/vbb-sort-lines/issues).
