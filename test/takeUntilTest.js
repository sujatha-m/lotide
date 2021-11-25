const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe('#takeUntil', () => {
  it('should return output[ 1, 2, 5, 7, 2 ]', () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    assert.deepEqual(takeUntil(data1, x => x < 0), ([1, 2, 5, 7, 2]));
  });

  it("should return output [ 'I've', 'been', 'to', 'Hollywood' ]", () => {
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    assert.deepEqual(takeUntil(data2, x => x === ','), (["I've",'been', 'to', 'Hollywood' ]));
  });

  it("should return [ 1, 2, 5, 7, 2 ]", () => {
    const data3 = [1, 2, 5, 7, 8, 2, -1, 2, 4, 5, 9];
    assert.deepEqual(takeUntil(data3,  x => x < 0), ([ 1, 2, 5, 7, 8, 2 ]));
  });
});
