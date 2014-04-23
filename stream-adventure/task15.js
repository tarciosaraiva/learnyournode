var zlib = require('zlib');
var crypto = require('crypto');
var through = require('through');
var parser = require('tar').Parse();

var cypher = process.argv[2];
var passphrase = process.argv[3];
var decrypter = crypto.createDecipher(cypher, passphrase);
var md5 = crypto.createHash('md5');

parser
  .on('entry', function (e) {
    // bloody hell, e is a stream
    // this, on the other hand, is something else
    if (e.type === 'File') {
      var md5_stream = crypto.createHash('md5', {
        encoding: 'hex'
      });
      var tr = through(function (data) {
          this.queue(data);
        },
        function () {
          this.queue(' ' + e.path + '\n');
        });
      e.pipe(md5_stream).pipe(tr).pipe(process.stdout);
    }
  });

process.stdin.pipe(decrypter).pipe(zlib.createGunzip()).pipe(parser);