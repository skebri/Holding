angular.module('app')
	.directive('page', () => {
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'pages/page/page.html',
			link: (scope) => {
			}
		}
	})