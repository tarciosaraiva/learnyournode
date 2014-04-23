var buffs = [];

// solution capturing all data
process.stdin
  .on('data', function (chunk) {
    buffs.push(chunk);
  })
  .on('end', function () {
    console.log(Buffer.concat(buffs));
  });
