var through = require('through');
var trumpet = require('trumpet');

function write(data) {
  var line = data.toString();
  this.queue(line.toUpperCase());
}

var tr = through(write);
var tp = trumpet();

// creating stream with filter
var loud = tp.select('.loud').createStream();

// then piping it back to itself
// so the contents of the selected
// elements can be replaced
loud.pipe(tr).pipe(loud);

process.stdin.pipe(tp).pipe(process.stdout);