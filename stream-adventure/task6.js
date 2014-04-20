var concat = require('concat-stream');
var body = '';

process.stdin.setEncoding('utf8');

var write = concat(function (data) {
  console.log(data.split('').reverse().join(''));
});

process.stdin.pipe(write);