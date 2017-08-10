angular.module('app')
	.directive('customFooter', () => {
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'components/footer/footer.html',
			link: (scope) => {
			}
		}
	})