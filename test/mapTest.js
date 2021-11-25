const assert = require('chai').assert;
const map = require('../map');

describe('#map', () => {
  const words = ['ground', 'control', 'to', 'major', 'tom'];
  const animals = ['cat', 'dog', 'bunny', 'rat', 'monkey'];
  const numbers = ['1256', '12589'];
  
  it("should return [ 'g', 'c', 't', 'm', 't' ]", () => {
    assert.deepEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
  });

  it("should return ['c', 'd', 'b', 'r', 'm']", () => {
    assert.deepEqual(map(animals, word => word[0]), ['c', 'd', 'b', 'r', 'm']);
  });

  it("should return ['1', '1' ]", () => {
    assert.deepEqual(map(numbers, number => number[0]), ['1','1']);
  });
   
});