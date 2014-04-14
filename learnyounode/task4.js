var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, 'utf8', function (err, data) {
  if (err) process.exit(0);
  var newlines = data.split('\n').length - 1;
  console.log(newlines);
});