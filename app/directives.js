'use strict';

lodSite.directive('pageHeader',function(){
  return{
    restrict : 'E',
    scope: true,
    templateUrl: '../templates/header.html',
    link: function($scope, el, attrs) {
      var isBlack = attrs.isblack || false;
      if (isBlack) {
        el.addClass('header--black');
      }
    }
    //controller: 'HeaderCtrl'
  }
});

lodSite.directive('pageFooter',function(){
  return{
    restrict : 'E',
    scope: true,
    templateUrl: '../templates/footer.html',
    controller: 'FooterCtrl'
  }
});

lodSite.directive('pageProjects',function(){
  return{
    restrict : 'E',
    scope: true,
    templateUrl: '../templates/projects-section.html',
    controller: 'ProjectsListCtrl'
  }
});