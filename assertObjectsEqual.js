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

const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let i in object1) {
    if (Array.isArray(object1[i]) && Array.isArray(object2[i])) {
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

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(
      `✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(`🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const car = {type:"Fiat", model:"500", color:"white"};
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
const num = {1: "a", 2: "b" };

assertObjectsEqual(car, person);
assertObjectsEqual(car, car);
assertObjectsEqual(person, num);



