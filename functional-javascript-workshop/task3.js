// original
function doubleAll(numbers) {
  var result = []
  for (var i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * 2);
  }
  return result;
}

function doubleAllMap(numbers) {
  return numbers.map(function (val) {
    return val * 2;
  });
}

module.exports = doubleAllMap;