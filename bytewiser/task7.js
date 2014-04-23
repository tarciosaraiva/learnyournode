var input = process.argv[2];

var uint32 = new Uint32Array(1);
uint32.set([input]);

var uint16 = new Uint16Array(uint32.buffer);
console.log(JSON.stringify(uint16));

// Uncomment the following lines to have a clear view
// of the object representation
// the int16 array has double the elements
// as it only has half the bytes of a 32 uint

// console.log(uint32);
// console.log(uint16);