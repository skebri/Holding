angular.module('app')
	.directive('contactUs', () => {
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'pages/contact-us/contact-us.html',
			link: (scope) => {
			}
		}
	})