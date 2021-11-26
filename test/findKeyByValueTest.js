const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe('#findKeyByValue', () => {
  const bestTVShowsByGenre = {
    // eslint-disable-next-line camelcase
    sci_fi: 'The Expanse',
    comedy: 'Brooklyn Nine-Nine',
    drama: 'The Wire'
  };
  
  it('should check the value and find key', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  
  it('should return comedy for Brooklyn nine-nine', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
  });
});
