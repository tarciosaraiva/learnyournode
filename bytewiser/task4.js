var fs = require('fs');
var file = process.argv[2];

fs.createReadStream(file)
  .on('data', function (chunk) {
    var offset = 0;

    for (var i = 0; i < chunk.length; i++) {
      if (chunk[i] === 0x0A) {
        console.log(chunk.slice(offset, i));
        i++;
        offset = i;
      }
    }

    console.log(chunk.slice(offset, i));

  });