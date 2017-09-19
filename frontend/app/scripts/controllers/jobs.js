'use strict';

angular.module('psJwtApp').controller('JobsCtrl', function ($scope, $http, API_URL, alert) {
      $http.get(API_URL + 'jobs')
        .then(function(jobs){
          $scope.jobs = jobs;
        })
        .catch(function(err){
          alert('warning', 'Unable to get jobs');
        });
    
  });
