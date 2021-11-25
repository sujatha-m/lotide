const eqArrays = require('./eqArrays');

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

