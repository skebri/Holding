angular.module('app')
	.directive('navigationItem', ($timeout) => {
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'components/navigation/navigation-item.html',
			scope: {
				'index': '=',
				'item': '=',
				'toggleMenu': '='
			},
			link: (scope) => {
				console.log('navigationItem', scope.index, scope.item);

				scope.onItemClick = ($event) => {
					scope.showSpin = true;

					$timeout(() => {
						scope.showSpin = false;
						scope.toggleMenu();
					}, 800);
				};
			}
		}
	})