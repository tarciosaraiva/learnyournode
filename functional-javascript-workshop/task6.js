// function countWords(arr) {
//   return arr.reduce(function(countMap, word) {
//     countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
//     return countMap
//   }, {}) // second argument to reduce initialises countMap to {}
// }

// module.exports = countWords
      
function countWords(inputWords) {
  var result = {};

  function checkAndAdd(val) {
    if (!result[val]) {
      result[val] = 0;
    }
    result[val]++;
  }

  return inputWords.reduce(function (pV, cV) {
    if (typeof pV === 'string') {
      checkAndAdd(pV);
    }

    checkAndAdd(cV);

    return result;
  });
}

module.exports = countWords;