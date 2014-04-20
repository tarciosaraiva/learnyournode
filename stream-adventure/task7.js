var http = require('http');
var through = require('through');

var port = parseInt(process.argv[2]);

function write(data) {
  var line = data.toString();
  this.queue(line.toUpperCase());
}

var server = http.createServer(function (req, res) {
  if (req.method === 'POST') {
    // through has to be defined inside the server
    // otherwise the context will be the running process
    // and not the server
    var tr = through(write);
    req.pipe(tr).pipe(res);
  }
});

server.listen(port);