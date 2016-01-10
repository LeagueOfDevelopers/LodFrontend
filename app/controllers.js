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
  if($scope.apiForProjects === 'All'){
    $http.get('http://api.lod-misis.ru/projects').success(function(data) {
      $scope.projects = data;
    });
  }else{
    $http.get('http://api.lod-misis.ru/projects/random/2').success(function(data) {
      $scope.projects = data;
    });
  }
  $scope.selected = false;
  $scope.activateTag = function() {
    $scope.selected = !$scope.selected;
  };
}]);

lodSite.controller('FooterController', ['$scope', '$http', function($scope, $http) {
 $scope.currentDate = new Date();
}]);

lodSite.controller('ProjectController', ['$scope', '$http', function ($scope, $http) {
  $http.get('http://api.lod-misis.ru/projects/2').success(function (data) {
    $scope.project = data;
    $scope.projectTypes = $scope.project.ProjectType.slice();
    //mapping of int array
    for (var i = 0; i < $scope.projectTypes.length; i++) {
      $scope.projectTypes[i] = ($scope.projectTypes[i] === 0) ? 'Веб' :
        ($scope.projectTypes[i] === 1) ? 'Мобильное' :
          ($scope.projectTypes[i] === 2) ? 'Десктопное' :
            ($scope.projectTypes[i] === 3) ? 'Игра' :
              ($scope.projectTypes[i] === 4) ? 'Плагин' : 'Прочее';
    }
    $scope.projectStatus = ($scope.project.ProjectStatus === 0) ? 'запланирован' :
      ($scope.project.ProjectStatus === 1) ? 'в процессе' :
        ($scope.project.ProjectStatus === 2) ? 'заморожен' : 'завершён';
    $scope.projectIssues = $scope.project.Issues.slice();
  })
}]);
