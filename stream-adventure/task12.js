var through = require('through');
var duplex = require('duplexer');

module.exports = function (counter) {
  var hashcount = {};
  var ws = through(function (obj) {
    // write callback
    var country = obj.country;
    if (!hashcount[country])
      hashcount[country] = 0;
    hashcount[country]++;
  }, function () {
    // end callback
    counter.setCounts(hashcount);
  });

  return duplex(ws, counter);
};