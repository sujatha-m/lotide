const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it('should return middle number from an array', () => {
    assert.strictEqual(middle([1, 2, 3]), 2);
  });

  it('should return empty arry when passing 2 numbers', () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it('should return 2 numbers when you give even numbers', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});