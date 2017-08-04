angular.module('app')
	.directive('navigation', () => {
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'components/navigation/navigation.html',
			link: (scope) => {
				console.log('navigation');
			}
		}
	})