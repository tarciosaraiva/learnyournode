// ~~  Basic: Recursion  ~~
var idx = 0;

function reduce(arr, fn, initial) {
  if (!arr.length) {
    return initial;
  } else {
    var obj = fn(initial, arr.shift(), idx, arr);
    idx++;
    return reduce(arr, fn, obj);
  }
};

module.exports = reduce;