const  assert  = require('chai').assert;
const countOnly = require('../countOnly');

const firstNames = [
  'Karl',
  'Salima',
  'Agouhanna',
  'Fang',
  'Kavith',
  'Jason',
  'Salima',
  'Fang',
  'Joe'
];
describe('#countOnly', () => {
  it("should return { 'Jason': 1, 'Fang': 2 }", () => {
    assert.deepEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true }), { "Jason": 1, "Fang": 2});
  });

  it("should return { 'Karl': 1 }", () => {
    assert.deepEqual(countOnly(firstNames, { "Karl": true, "Theo": true, "Joe": false }), { "Karl" : 1 });
  });
});
