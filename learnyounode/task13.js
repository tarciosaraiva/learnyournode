var http = require('http');
var url = require('url');
var moment = require('moment');
var port = process.argv[2];

var routes = {
  '/api/parsetime': function (isoDate) {
    var d = new Date(isoDate);
    return {
      hour: d.getHours(),
      minute: d.getMinutes(),
      second: d.getSeconds()
    };
  },
  '/api/unixtime': function (isoDate) {
    var d = new Date(isoDate);
    return {
      unixtime: d.getTime()
    };
  }
};

function isPathValid(path) {
  return routes[path] !== undefined;
}

function isIsoValid(query) {
  if (!query.iso) {
    return false;
  }

  return moment(query.iso).isValid();
}

var server = http.createServer(function (req, res) {
  var reqUrl = url.parse(req.url, true);

  if (!isPathValid(reqUrl.pathname)) {
    res.writeHead(404);
    res.end('Path is unknown or invalid.');
  }

  if (!isIsoValid(reqUrl.query)) {
    res.writeHead(400);
    res.end('You must provide a valid ISO parameter.');
  }

  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  res.end(JSON.stringify(routes[reqUrl.pathname](reqUrl.query.iso)));
});

server.listen(port);