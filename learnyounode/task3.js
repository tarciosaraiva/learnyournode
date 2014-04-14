var fs = require('fs');

var file = process.argv[2];
var bufData = fs.readFileSync(file, 'utf8');
var newlines = bufData.split('\n').length - 1;
console.log(newlines);