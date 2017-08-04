angular.module('app')
        .config(($stateProvider, $locationProvider, $urlRouterProvider, ngDialogProvider) => {

            ngDialogProvider.setDefaults({
                className: 'ngdialog-theme-default',
                showClose: false
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
            });

            if (window.history && window.history.pushState) {
                $locationProvider.html5Mode({
                    enabled: true,
                    requireBase: false
                }).hashPrefix('');
            }
        });

