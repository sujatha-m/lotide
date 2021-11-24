const assertArraysEqual = require('./assertArraysEqual');

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

//test cases
const words = ['ground', 'control', 'to', 'major', 'tom'];
const animals = ['cat', 'dog', 'bunny', 'rat', 'monkey'];
const numbers = ['one', 'two', 'three', 'four', 'five'];
const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(map(animals, word => word[1]), ['c', 'd','n', 'r', 'm']);
assertArraysEqual(map(numbers, word => word[0]), ['o', 't', 't', 'f','f']);
