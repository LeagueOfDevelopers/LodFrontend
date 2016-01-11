'use strict';

lodSite.controller('HeaderController', ['$scope',function($scope) {
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

lodSite.controller('RandomProjectsController', ['$scope', '$http', function($scope, $http) {
  $http.get('http://api.lod-misis.ru/projects/random/4').success(function(data) {
    $scope.randomProjects = data;
  });
}]);

lodSite.controller('FullProjectsController', ['$scope', '$http', function($scope, $http) {
  $http.get('http://api.lod-misis.ru/projects').success(function(data) {
    $scope.fullProjects = data;
    for(var i = 0; i < $scope.fullProjects.length; i++){
      $scope.fullProjects[i].ProjectStatus = ($scope.fullProjects[i].ProjectStatus === 0) ? 'запланирован' :
        ($scope.fullProjects[i].ProjectStatus === 1) ? 'в процессе' :
          ($scope.fullProjects[i].ProjectStatus === 2) ? 'заморожен' : 'завершён';
    }
  });
}]);

lodSite.controller('FooterController', ['$scope', function($scope) {
 $scope.currentDate = new Date();
}]);

lodSite.controller('ProjectController', ['$scope', '$http', function ($scope, $http) {
  $http.get('http://api.lod-misis.ru/projects/2').success(function (data) {
    $scope.project = data;
    for (var i = 0; i < $scope.project.ProjectType.length; i++) {
      $scope.project.ProjectType[i] = ($scope.project.ProjectType[i] === 0) ? 'Веб' :
        ($scope.project.ProjectType[i] === 1) ? 'Мобильное' :
          ($scope.project.ProjectType[i] === 2) ? 'Десктопное' :
            ($scope.project.ProjectType[i] === 3) ? 'Игра' :
              ($scope.project.ProjectType[i] === 4) ? 'Плагин' : 'Прочее';
    }
    console.log($scope.project.ProjectType);
    $scope.project.ProjectStatus = ($scope.project.ProjectStatus === 0) ? 'запланирован' :
      ($scope.project.ProjectStatus === 1) ? 'в процессе' :
        ($scope.project.ProjectStatus === 2) ? 'заморожен' : 'завершён';
    $scope.projectIssues = $scope.project.Issues.slice();
  })
}]);
