var r = require('request');
var p = r.post('http://localhost:8000');

process.stdin.pipe(p).pipe(process.stdout);