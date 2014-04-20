var split = require('split');
var through = require('through');

var lineNum = 1;

function write(data) {
  var line = data.toString();
  this.emit('data', lineNum % 2 === 0 ? line.toUpperCase() + '\n' : line.toLowerCase() + '\n');
  lineNum++;
}

var tr = through(write);

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);