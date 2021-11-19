const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (
      array1[i] !== array2[i] &&
      (!Array.isArray(array1[i]) || !Array.isArray(array2[i]))
    ) {
      return false;
    }
    if (Array.isArray(array1[i] && Array.isArray(array2[i]))) {
      if (!eqArrays(array1[i], array2[i])) {
        return false;
      }
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//test cases
const words = ['ground', 'control', 'to', 'major', 'tom'];
const animals = ['cat', 'dog', 'bunny', 'rat', 'monkey'];
const numbers = ['one', 'two', 'three', 'four', 'five'];
const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(map(animals, word => word[1]), ['c', 'd','n', 'r', 'm']);
assertArraysEqual(map(numbers, word => word[0]), ['o', 't', 't', 'f','f']);
