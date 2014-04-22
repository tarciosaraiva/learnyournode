var zlib = require('zlib');
var es = require('event-stream');
var combine = require('stream-combiner');

module.exports = function () {
  var entry;

  return combine(
    es.split(),
    es.through(function (data) {
      // should verify if the line actually contain data
      // if it's run after a split
      if (data.length === 0) return;
      var obj = JSON.parse(data);

      if (obj.type === 'genre') {
        if (entry) {
          this.queue(JSON.stringify(entry) + '\n');
        }
        entry = {
          name: obj.name,
          books: []
        };
      }
      if (obj.type === 'book') {
        entry.books.push(obj.name);
      }
    }, function () {
      this.queue(JSON.stringify(entry) + '\n');
      this.queue(null);
    }),
    zlib.createGzip()
  );
}