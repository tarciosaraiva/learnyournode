var buffs = [];

// *************
// solution capturing all data
// *************
// process.stdin
//   .on('data', function (data) {
//     buffs.push(data);
//   })
//   .on('end', function () {
//     console.log(Buffer.concat(buffs));
//   });

// *************
// solution capturing chunks of data
// *************
process.stdin
  .on('readable', function () {
    var chunk;
    while (null !== (chunk = process.stdin.read())) {
      buffs.push(chunk);
    }
  })
  .on('end', function () {
    console.log(Buffer.concat(buffs));
  });