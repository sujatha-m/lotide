const middle = function(array) {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    let A = array.length / 2 - 1;
    let B = array.length / 2;
    return [array[A], array[B]];
  } else {
    return array[Math.floor(array.length / 2)];
  }
};

module.exports = middle;
