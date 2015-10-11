define(function(){
  var user = {
    'profileId': 1,
    'name': 'rob'
  }

  function getUser() {
    return user;
  }

  return { "getUser": getUser };
});
