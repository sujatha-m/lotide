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

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item) === true) {
      break;
    }
    results.push(item);
  }
  return results;
};

//Test cases
//expected output[ 1, 2, 5, 7, 2 ]
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

//expected output[ 'I\'ve', 'been', 'to', 'Hollywood' ]
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

const data3 = [1, 2, 5, 7, 8, 2, -1, 2, 4, 5, 9];
const results3 = takeUntil(data3, x => x < 0);
assertArraysEqual(results3, [ 1, 2, 5, 7, 2 ]);


