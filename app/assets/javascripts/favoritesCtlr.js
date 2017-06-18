/* global angular */
(function() {
  "use strict";

  angular.module("app").controller("favoritesCtlr"), function($scope, $http) {
  $scope.gemArray = $window.localStorage.getItem('gemNameKey');
  window.$scope = $scope;
  };
})();
