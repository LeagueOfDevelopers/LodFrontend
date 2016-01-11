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

lodSite.directive('randomProjects',function(){
  return{
    restrict : 'E',
    scope: true,
    templateUrl: 'templates/random-projects.html',
    controller: 'RandomProjectsController'
  }
});

lodSite.directive('fullProjects',function(){
  return{
    restrict : 'E',
    scope: true,
    templateUrl: 'templates/full-projects.html',
    controller: 'FullProjectsController'
  }
});

lodSite.directive('pageProject',function(){
  return{
    restrict : 'E',
    scope: true,
    templateUrl: 'templates/page-project.html'
  }
});