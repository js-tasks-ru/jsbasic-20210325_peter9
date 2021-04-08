function namify(users) {
  let UserNames=users.map(function (userObj) {
    return userObj['name'] ;
});
  return UserNames ;
}
