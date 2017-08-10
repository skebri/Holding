angular.module('app', ['ui.router', 'holding.templates', 'ngSanitize', 'ngDialog'])
    .config(($stateProvider, $urlRouterProvider, $locationProvider, $injector, $httpProvider) => {})
    .run(['$state', '$stateParams', ($state, $stateParams) => {
		//this solves page refresh and getting back to state
	}]);