var http = require('http');
var stream = require('bl');

var url = process.argv[2],
  body = '',
  bodyLen = 0;

http.get(url, function (response) {
  response.setEncoding('utf8');

  response.on('error', console.error);

  response.pipe(stream(function (err, data) {
    if (err) {
      console.error(err);
      process.exit(0);
    }

    bodyLen += data.length;
    body += data.toString();
  }));

  response.on('end', function () {
    console.log(bodyLen);
    console.log(body);
  });
});