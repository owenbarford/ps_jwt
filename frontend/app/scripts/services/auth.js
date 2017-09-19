'use strict';

angular.module('psJwtApp').service('auth', function ($http, API_URL, authToken, $state) {
  
  function authSuccessful(res){
    authToken.setToken(res.data.token);
    $state.go('main');
   }

  this.login = function(email, password){
    return $http.post(API_URL + 'login', {
      email:email, 
      password:password
    }).then(authSuccessful);
  };

  this.register = function(email, password){
    return $http.post(API_URL + 'register', {
      email:email,
      password:password
     }).then(authSuccessful);
  };

});