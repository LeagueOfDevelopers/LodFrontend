'use strict';

lodSite.controller('HeaderController', ['$scope',function($scope, $http) {
  $scope.opened = false;
  $scope.activeToggle = function() {
    $scope.opened = !$scope.opened;
  }
}]);

lodSite.controller('DevelopersListController', ['$scope', '$http', function($scope, $http) {
  $http.get('http://api.lod-misis.ru/developers/random/6').success(function(data) {
    $scope.developers = data;
  });
}]);

lodSite.controller('ProjectsListController', ['$scope', '$http', function($scope, $http) {
  $http.get('http://api.lod-misis.ru/projects/random/6').success(function(data) {
    $scope.projects = data;
  });
}]);

lodSite.controller('FooterController', ['$scope', '$http', function($scope, $http) {
 $scope.currentDate = new Date();
}]);

