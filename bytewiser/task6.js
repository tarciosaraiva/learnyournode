process.stdin
  .once('data', function (data) {
    var uint8 = new Uint8Array(data.length);
    for (var i = 0; i < data.length; i++) {
      uint8[i] = data.readUInt8(i);
    }
    console.log(JSON.stringify(uint8));
  });