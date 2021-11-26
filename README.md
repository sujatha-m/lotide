# lotide
A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sujatha-mallela/lotide`

**Require it:**

`const _ = require('@sujatha-mallela/lotide');`

**Call it:**

`const results = _.head([1, 2, 3]) // => 1`

## Documentation

The following functions are currently implemented:

* `assertArrayEquals`: function that asserts if two arrays are equals
* `assertEquals`: function that asserts if two values are equals
* `assertObjectsEqual`: function that asserts if two objects are equals
* `countOnly`: This function should take in a collection of items and return counts for a specific subset of those items. It won't count everything. In order to decide what to count, it will also be given an idea of which items we care about and it will only count those, ignoring the others. Items in our case will be limited to Strings.
* `eqArrays`: function that compare two arrays and check if it's a perfect match.
* `eqObjects`: function that take two objects and returns true or false, based on a perfect match.
* `findkey`: function that takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
* `findKeyByValue`: function that takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
* `head`: A commonly used function for arrays is to retrieve the first element from the array. This is often referred to as the "head" of the  array
* `map`: function will return a new array based on the results of the callback function.
* `middle`: function that take in an array and return the middle-most element(s) of the given array.
* `takeUntil`: function that will keep collecting items from a provided array until the callback provided returns a truthy value.
* `without`: description

