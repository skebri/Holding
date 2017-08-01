angular.module('app')
        .config(($stateProvider, $locationProvider, $httpProvider, $urlRouterProvider, ngDialogProvider) => {

            ngDialogProvider.setDefaults({
                className: 'ngdialog-theme-default',
                showClose: false
            });

            $stateProvider
                .state('app', {
                    url:"/",
                    controller: () => {
                    	console.log("DSADASD");
                    },
                    template: '../app/holding/base/base.html' 
                })

            if (window.history && window.history.pushState) {
                $locationProvider.html5Mode({
                    enabled: true,
                    requireBase: false
                }).hashPrefix('');
            }
        });
