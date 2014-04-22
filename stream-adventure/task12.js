var through = require('through');
var duplex = require('duplexer');

module.exports = function (counter) {
  var hashcount = {};

  function write(data) {
    var country = data.country;
    if (!hashcount[country]) {
      hashcount[country] = 0;
    }
    hashcount[country]++;
  }

  function end() {
    counter.setCounts(hashcount);
  }

  var ws = through(write, end);

  return duplex(ws, counter);
};