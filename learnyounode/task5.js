var fs = require('fs');

String.prototype.endsWith = function (suffix) {
  var l = this.length - suffix.length;
  return l >= 0 && this.indexOf(suffix, l) === l;
};

if (process.argv.length !== 4) {
  console.error('Format is node task5.js <dir> <extension>');
  process.exit(0);
}

var dir = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(dir, function (err, files) {

  if (err) {
    console.log('Could not read directory: ' + err);
    process.exit(0);
  }

  files
    .filter(function (el) {
      return el.endsWith(ext);
    })
    .forEach(function (el) {
      console.log(el);
    });

});