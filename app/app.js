'use strict';

var lodSite = angular.module('lodSite', []);

//keeping relative footer at the bottom
function setPaddingBottom() {
  $('.content').css('padding-bottom', $('footer').innerHeight());
}
setTimeout(setPaddingBottom, 500);
$(window).resize(setPaddingBottom);