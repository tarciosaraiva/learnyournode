var through = require('through');

process.stdin
  .pipe(through(function (data) {
    var dots = [];
    for (var i = 0; i < data.length; i++) {
      if (data[i] === 46) {
        dots.push(i);
      }
    }
    dots.forEach(function (el) {
      data.write('!', el, 1);
    })
    console.log(data);
  }));