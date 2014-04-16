var fs = require('fs');
var http = require('http');
var port = process.argv[2];
var file = process.argv[3];

var server = http.createServer(function (req, res) {
  res.writeHead(200, {
    'content-type': 'text/plain'
  });

  var stream = fs.createReadStream(file, {
    encoding: 'utf8'
  });

  stream.pipe(res);

});

server.listen(port);