const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:   ${actual}===${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed :  ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i] && (!Array.isArray(array1[i]) || !Array.isArray(array2[i]))) {
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

console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays([1, 5, 3], [1, 2, 3]));

console.log(eqArrays(['1', '2', '3'], ['1', '2', '3']));// => true
console.log(eqArrays(['1', '2', '3'], ['1', '2', 3]));// => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 5, 3], [1, 2, 3]), true);
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), false);
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false);
