// *********************************
// There does not seem to be a difference in terms of speed
// however, it's a good practice to filter your data before
// applying any other operation to it
// *********************************

// function getShortMessages(messages) {
//   return messages
//     .map(function (val) {
//       return val.message;
//     })
//     .filter(function (val) {
//       return (val.message.length < 50);
//     });
// }

function getShortMessages(messages) {
  return messages
    .filter(function (val) {
      return (val.message.length < 50);
    })
    .map(function (val) {
      return val.message;
    });
}

module.exports = getShortMessages;