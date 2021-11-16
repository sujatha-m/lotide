const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:   ${actual}===${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed :  ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
    return true;
  } else {
    return false;
  }
};
console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays([1, 5, 3], [1, 2, 3]));

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 5, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

