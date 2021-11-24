const assertEqual = require('./assertEqual');

const findKey = function(obj, callback) {
  let result = undefined;
  for (const key of Object.keys(obj)) {
    if (callback(obj[key]) === true) {
      result = key;
      break;
    }
  }
  return result;
};

module.exports = findKey;

//Test cases
const result = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

assertEqual(findKey(result, x => x.stars === 2), "noma");
assertEqual(findKey(result, x => x.stars === 2), "Akaleri");
assertEqual(findKey(result, x => x.stars === 1), undefined);



