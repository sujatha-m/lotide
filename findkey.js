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






