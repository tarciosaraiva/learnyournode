var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, cb) {

  fs.readdir(dir, function (err, files) {
    if (err) {
      return cb(err, null);
    }

    files = files.filter(function (el) {
      return path.extname(el) === '.' + ext;
    });

    cb(null, files);
  });

};