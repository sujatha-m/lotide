const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = takeUntil;

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


