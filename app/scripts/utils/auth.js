define(['models/login','models/user'], function( LoginModel, UserModel ) {

  function auth() {}

  /**
   * performs the login action
   * @param {Object} data
   *        data.email , data.password
   * @return {Object} jquery promise
   */
  auth.prototype.login = function(authData) {
    var loginModel = new LoginModel(),
        self = this;
    //set the data in model
    loginModel.set({
      email: authData.email,
      password: authData.password
    }, {silent: true});

    //send the data to server via POST
    //Our demo api server does not support this so we will just use a GET
    //Using GET is not good security practice for this scenario
    // this.model.save().done( function(data, textStatus, jqXHR) {
    //     alert('logged in');
    // } );
    //return the jquery promise
    var pr = loginModel.fetch();
    pr.done(function( data, textStatus, jqXHR ) {
      $.isArray( data ) && data.length ? self.setUserSession( data[0] ) : self.setUserSession( data );
    });
    return pr;
  };

  auth.prototype.setUserSession = function(user) {
    window.sessionStorage.setItem( 'user', JSON.stringify(user) );
  };

  auth.prototype.removeUserSession = function() {
    window.sessionStorage.removeItem( 'user' );
  };

  auth.prototype.getUserSession = function() {
    var us = window.sessionStorage.getItem( 'user' ) || null;
    return us ? JSON.parse(us) : null;
  };

  return new auth;

});
