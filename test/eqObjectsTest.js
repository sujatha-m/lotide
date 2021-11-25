const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {
  const ab = { a: '1', b: '2' };
  const ba = { b: '2', a: '1' };
  it("should return true for (ab, ba)", () => {
    assert.strictEqual(eqObjects(ab, ba), true);
  });

  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  it("should return true for (cd, dc)", () => {
    assert.strictEqual(eqObjects(cd, dc), true);
  });

  const abc = { a: '1', b: '2', c: '3' };
  it("should return false for (ab, abc)", () => {
    assert.strictEqual(eqObjects(ab, abc), false);
  });

  const cd2 = { c: "1", d: ["2", 3, 4] };
  it("should return false for (cd, cd2)", () => {
    assert.strictEqual(eqObjects(cd, cd2), false);
  });

});
