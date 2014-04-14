var reader = require('./reader');

if (process.argv.length !== 4) {
  console.error('Format is node app.js <dir> <extension>');
  process.exit(0);
}

var dir = process.argv[2];
var ext = process.argv[3];

reader(dir, ext, function (err, data) {
  if (err) {
    console.error(err);
    process.exit(0);
  }

  data.forEach(function (el) {
    console.log(el);
  });
});