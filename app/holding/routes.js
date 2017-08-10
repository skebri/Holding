angular.module('app')
        .config(($stateProvider, $locationProvider, $urlRouterProvider, ngDialogProvider) => {

          ngDialogProvider.setDefaults({
              className: 'ngdialog-theme-default',
              showClose: true 
          });

          $stateProvider
            .state('home', {
                url: '',
                templateUrl: 'pages/base/base.html'
            })
            .state('home.home', {
                url: '/',
                template: '<roundy></roundy>',
            })
            .state('home.page', {
                url: '/page',
                template: '<page></page>',
            })
            .state('home.about-us', {
                url: '/about-us',
                template: '<about-us></about-us>',
            })
            .state('home.contact-us', {
                url: '/contact-us',
                template: '<contact-us></contact-us>',
            })
            .state('home.our-mission', {
                url: '/our-mission',
                template: '<our-mission></our-mission>',
            });

            if (window.history && window.history.pushState) {
                $locationProvider.html5Mode({
                    enabled: true,
                    requireBase: false
                }).hashPrefix('');
            }
        });

