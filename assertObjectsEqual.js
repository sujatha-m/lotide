const eqObjects = require('./eqObjects');

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

module.exports = assertObjectsEqual;

const car = {type:"Fiat", model:"500", color:"white"};
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
const num = {1: "a", 2: "b" };

assertObjectsEqual(car, person);
assertObjectsEqual(car, car);
assertObjectsEqual(person, num);



