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

const middle = function(array) {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    let A = array.length / 2 - 1;
    let B = array.length / 2;
    return [array[A], array[B]];
  } else {
    return array[Math.floor(array.length / 2)];
  }
};

module.exports = middle;
