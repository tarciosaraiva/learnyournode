var through = require('through');
var trumpet = require('trumpet');

function write(data) {
  var line = data.toString();
  this.emit('data', line.toUpperCase());
}

var tp = trumpet();
tp.pipe(process.stdout);

tp.selectAll('.loud', function (loud) {
  var tr = through(write);
  loud.createStream().pipe(tr).pipe(process.stdout);
});

process.stdin.pipe(tp);