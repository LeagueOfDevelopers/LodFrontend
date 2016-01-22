'use strict';

lodSite.controller('HeaderController', ['$scope',function($scope) {
  $scope.opened = false;
  $scope.activeToggle = function() {
    $scope.opened = !$scope.opened;
  }
}]);

lodSite.controller('RandomDevelopersController', ['$scope', '$http', function($scope, $http) {
  $http.get('http://api.lod-misis.ru/developers/random/6').success(function(data) {
    $scope.randomDevelopers = data;
  });
}]);

lodSite.controller('FullDevelopersController', ['$scope', '$http', function($scope, $http) {
  $http.get('http://api.lod-misis.ru/developers').success(function(data) {
    $scope.fullDevelopers = data;
  });
}]);

lodSite.controller('RandomProjectsController', ['$scope', '$http', function($scope, $http) {
  $http.get('http://api.lod-misis.ru/projects/random/4').success(function(data) {
    $scope.randomProjects = data;
  });
}]);

lodSite.controller('FullProjectsController', ['$scope', '$http', function($scope, $http) {
  $http.get('http://api.lod-misis.ru/projects').success(function(data) {
    $scope.fullProjects = data;
  });
}]);

lodSite.controller('FooterController', ['$scope', function($scope) {
 $scope.currentDate = new Date();
}]);

lodSite.controller('ProjectController', ['$scope', '$http', function ($scope, $http) {
  $http.get('http://api.lod-misis.ru/projects/1').success(function (data) {
    $scope.project = data;
    $scope.projectTypes = $scope.project.ProjectType;
    $scope.projectIssues = $scope.project.Issues;
  })
}]);
