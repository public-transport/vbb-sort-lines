'use strict'

const test = require('tape')
const sort = require('.')



test('sorts by mode of transport', (t) => {
	t.plan(1)

	t.deepEqual(sort([
		{type: 'line', id: '3', name: 'foo', mode: 'bus'},
		{type: 'line', id: '4', name: 'bar', mode: 'walking'},
		{type: 'line', id: '1', name: 'bar', mode: 'train'},
		{type: 'line', id: '2', name: 'bar', mode: 'ferry'}
	]), [
		{type: 'line', id: '1', name: 'bar', mode: 'train'},
		{type: 'line', id: '2', name: 'bar', mode: 'ferry'},
		{type: 'line', id: '3', name: 'foo', mode: 'bus'},
		{type: 'line', id: '4', name: 'bar', mode: 'walking'}
	])
})

test('sorts by name', (t) => {
	t.plan(1)

	t.deepEqual(sort([
		{type: 'line', id: '4', name: '245', mode: 'bus'},
		{type: 'line', id: '2', name: 'M45', mode: 'bus'},
		{type: 'line', id: '5', name: '300', mode: 'bus'},
		{type: 'line', id: '1', name: 'M5', mode: 'bus'},
		{type: 'line', id: '3', name: '10', mode: 'bus'}
	]), [
		{type: 'line', id: '1', name: 'M5', mode: 'bus'},
		{type: 'line', id: '2', name: 'M45', mode: 'bus'},
		{type: 'line', id: '3', name: '10', mode: 'bus'},
		{type: 'line', id: '4', name: '245', mode: 'bus'},
		{type: 'line', id: '5', name: '300', mode: 'bus'}
	])
})

test('kitchen sink', (t) => {
	t.plan(1)

	t.deepEqual(sort([
		{type: 'line', id: '1', name: '11', mode: 'train'},
		{type: 'line', id: '5', name: '300', mode: 'bus'},
		{type: 'line', id: '2', name: '100', mode: 'train'},
		{type: 'line', id: '4', name: 'M45', mode: 'bus'},
		{type: 'line', id: '3', name: '10', mode: 'ferry'}
	]), [
		{type: 'line', id: '1', name: '11', mode: 'train'},
		{type: 'line', id: '2', name: '100', mode: 'train'},
		{type: 'line', id: '3', name: '10', mode: 'ferry'},
		{type: 'line', id: '4', name: 'M45', mode: 'bus'},
		{type: 'line', id: '5', name: '300', mode: 'bus'}
	])
})
