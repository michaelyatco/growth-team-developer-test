/* global angular */
(function() {
  "use strict";

  angular.module("app").controller("favoritesCtrl", function($scope, $http, $window) {
    $scope.gemArray = JSON.parse($window.localStorage.getItem('gemNameKey'));
    $scope.remove = function($index) {
      $scope.gemArray.splice($index,1);
    };
  });
})();
