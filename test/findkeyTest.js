const assert = require('chai').assert;
const findKey = require('../findkey');

describe('#findkey', () => {
  const result = {
    'Blue Hill': { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 }
  };

  it('should return noma for x => x.stars === 2', () => {
    assert.strictEqual(findKey(result, x => x.stars === 2), "noma");
  });

  it('should return Akaleri for x => x.stars === 2', () => {
    assert.strictEqual(findKey(result, x => x.stars === 3), "Akaleri");
  });

  it('should return undefined if we give false value', () => {
    assert.strictEqual(findKey(result, x => x.stars === 0), undefined);
  });

});
