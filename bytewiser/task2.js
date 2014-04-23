var octets = process.argv.slice(2);
var buf = new Buffer(octets);
console.info(buf.toString('hex'));