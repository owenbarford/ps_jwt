'use strict';

angular.module('psJwtApp').controller('LoginCtrl', function ($scope, alert, auth) {
  $scope.submit = function(){
    
        auth.login($scope.email, $scope.password)
          .then(function(res){
            alert('success', 'Welcome ', 'Thanks for coming back ');
          })
          .catch(function(err){
            alert('warning', 'Something went wrong');
          });
        };
});
    

