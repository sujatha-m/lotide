const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let i in object1) {
    if ((Array.isArray(object1[i]) && Array.isArray(object2[i]))) {
      if (eqArrays(object1[i], object2[i]) === false) {
        return false;
      }
    } else {
      if (object1[i] !== object2[i]) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;

//Test cases
const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
assertEqual(eqObjects(ab, ba), false); // => true

const abc = { a: '1', b: '2', c: '3' };
assertEqual(eqObjects(ab, abc), false);// => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

