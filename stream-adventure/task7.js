var http = require('http');
var through = require('through');

var port = parseInt(process.argv[2]);

function write(data) {
  var line = data.toString();
  this.queue(line.toUpperCase());
}

var server = http.createServer(function (req, res) {
  if (req.method === 'POST') {
    var tr = through(write);
    // req.pipe(through(function (buf) {
    //   this.queue(buf.toString().toUpperCase());
    // })).pipe(res);
    req.pipe(tr).pipe(res);
  }
});

server.listen(port);