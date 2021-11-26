const assert = require('chai').assert;
const assertObjectsEquals = require('../assertObjectsEqual');

describe('#assertObjectsEquals', () => {
  const car = {type:"Fiat", model:"500", color:"white"};
  const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

  it("should return { a: '1', b: '2' } === { b: '2', a: '1' }", () => {
    assert.strictEqual(assertObjectsEquals(car, person, false));
  });

  it("should return { type: 'Fiat', model: '500', color: 'white' } === { type: 'Fiat', model: '500', color: 'white' }", () => {
    assert.strictEqual(assertObjectsEquals(car, car, true));
  });

});

