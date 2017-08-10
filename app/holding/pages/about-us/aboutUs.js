angular.module('app')
	.directive('aboutUs', () => {
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'pages/about-us/about-us.html',
			link: (scope) => {
			}
		}
	})