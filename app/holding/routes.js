angular.module('app')
        .config(($stateProvider, ngDialogProvider, $locationProvider) => {

            ngDialogProvider.setDefaults({
                className: 'ngdialog-theme-default',
                showClose: false
            });

          $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'base/base.html',
                controller: 'baseCtrl'
            });

            if (window.history && window.history.pushState) {
                $locationProvider.hashPrefix(''); // by default '!'
                $locationProvider.html5Mode(true);
            }
        });

