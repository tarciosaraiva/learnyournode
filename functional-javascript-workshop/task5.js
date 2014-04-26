function checkUsersValid(goodUsers) {
  return function (submittedUsers) {
    return submittedUsers.every(function (suEl) {
      return goodUsers.some(function (guEl) {
        return suEl.id === guEl.id;
      });
    });
  }
}

module.exports = checkUsersValid;