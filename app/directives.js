'use strict';

lodSite.directive('pageHeader',function(){
  return{
    restrict : 'E',
    scope: true,
    templateUrl: 'templates/page-header.html',
    link: function($scope, el, attrs) {
      var isBlack = attrs.isblack || false;
      if (isBlack) {
        el.addClass('header--black');
      }
    },
    controller: 'HeaderController'
  }
});

lodSite.directive('pageFooter',function(){
  return{
    restrict : 'E',
    scope: true,
    templateUrl: 'templates/page-footer.html',
    controller: 'FooterController'
  }
});

lodSite.directive('pageProjects',function(){
  return{
    restrict : 'E',
    scope: true,
    templateUrl: 'templates/page-projects.html',
    link: function($scope, el, attrs) {
      var isFull = attrs.isfull || false;
      if (isFull === 'true') {
        $scope.apiForProjects = 'All';
      }else{
        $scope.apiForProjects = 'notAll';
      }
    },
    controller: 'ProjectsListController'
  }
});

lodSite.directive('pageProject',function(){
  return{
    restrict : 'E',
    scope: true,
    templateUrl: 'templates/page-project.html'
  }
});