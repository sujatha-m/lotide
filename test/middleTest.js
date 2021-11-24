const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
console.log(middle([1, 2])); // => []

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
const numbers = [1, 2, 3, 4, 5, 6];
assertArraysEqual(numbers, [1, 2, 3, 4, 5, 6]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [3, 4])