'use strict';

angular.module('psJwtApp').controller('RegisterCtrl', function ($scope, alert, auth) {
  $scope.submit = function(){

    auth.register($scope.email, $scope.password)
      .then(function(res){
        alert('success', 'Account Created! ', 'Welcome, ');
      })
      .catch(function(err){
        alert('warning', 'Something went wrong');
      });
    };
  });
