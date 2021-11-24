const assertArraysEqual = require('./assertArraysEqual');

const without = function(a, b) {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        a.splice(i, 1);
      }
    }
  }
  return a;
};

module.exports = without;

//Test cases
assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual(['1','2','3'], ['1','2','3']);
assertArraysEqual([1,2,3], [1,2,'3']);
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));