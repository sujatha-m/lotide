const assert = require('chai').assert;
const without = require('../without');

describe('#without', () => {
  it("should return [2, 3]", () =>{
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  it("should return  ['hello', 'world']", () =>{
    const words = ['hello', 'world', 'lighthouse'];
    assert.deepEqual(without(words, ["lighthouse"]), [ 'hello', 'world']);
  });
  it("should return ['1', '2']", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ['1','2']);
  });
});
