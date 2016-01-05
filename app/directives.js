'use strict';

lodSite.directive('pageHeader',function(){
  return{
    restrict : 'E',
    scope: true,
    templateUrl: './templates/header.html'
    //controller: 'HeaderCtrl'
  }
});

lodSite.directive('pageFooter',function(){
  return{
    restrict : 'E',
    scope: true,
    templateUrl: './templates/footer.html'
    //controller: 'FooterCtrl'
  }
});