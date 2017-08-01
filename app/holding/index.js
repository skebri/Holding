angular.module('app', ['ui.router', 'modelicco.templates', 'ngSanitize', 'angularMoment', 'ngDialog'])
    .config(($stateProvider, $urlRouterProvider, $locationProvider, $injector, $httpProvider) => {});

setTimeout(function () {
  $('.section').toggleClass('visible');
}, 100);
//============================================================Animation2

$('[has-ripple="true"]').click(function () {
  $(this).toggleClass('clicked');
  $('.menu').toggleClass('open');
});

$('.menu a').each(function (index) {
  var thismenuItem        = $(this);
  
  thismenuItem.click(function (event) {
    event.preventDefault();
    
    $('.menuitem-wrapper').eq(index).addClass('spin');
    
    var timer = setTimeout(function () {
      $('body').removeAttr('class').addClass('bg-'+index);
      $('.menuitem-wrapper').eq(index).removeClass('spin');
      $('.menu').removeClass('open');
      $('.menu-btn').removeClass('clicked');
    }, 800);
  });
});