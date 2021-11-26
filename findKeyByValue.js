const findKeyByValue = function(obj, val) {
  let result = undefined;
  for (const key of Object.keys(obj)) {
    if (val === obj[key]) {
      result = key;
    }
  }
  return result;
};

module.exports = findKeyByValue;
