'use strict';

lodSite.controller('DeveloperListCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('http://api.lod-misis.ru/developers/random/5').success(function(data) {
    $scope.developers = data;
  });
}]);

lodSite.controller('ProjectsListCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('http://api.lod-misis.ru/projects/random/6').success(function(data) {
    $scope.projects = data;
  });
}]);

lodSite.controller('FooterCtrl', ['$scope', '$http', function($scope, $http) {
 $scope.date = new Date();
}]);

