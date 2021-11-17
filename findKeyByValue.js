const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:   ${actual}===${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed :  ${actual} !== ${expected}`);
  }
};

const bestTVShowsByGenre = {
  // eslint-disable-next-line camelcase
  sci_fi: 'The Expanse',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'The Wire'
};

const findKeyByValue = function(obj, val) {
  let result = undefined;
  for (const key of Object.keys(obj)) {
    if (val === obj[key]) {
      result = key;
    }
  }
  return result;
};

//findKeyByValue(bestTVShowsByGenre, 'The Wire')
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), undefined);
