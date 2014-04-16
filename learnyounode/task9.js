var http = require('http');
var stream = require('bl');
var async = require('async');

var urls = process.argv.slice(2),
  body = '';

function execute(url, cb) {
  http.get(url, function (response) {
    response.setEncoding('utf8');

    response.on('error', console.error);

    response.pipe(stream(function (err, data) {
      if (err) {
        console.error(err);
        process.exit(0);
      }

      body += data.toString();
    }));

    response.on('end', function () {
      console.log(body);
      body = '';
      cb();
    });
  });
}

function finaliseCb(err) {
  if (err) {
    console.error(err);
    process.exit(0);
  }
}

async.eachSeries(urls, execute, finaliseCb);