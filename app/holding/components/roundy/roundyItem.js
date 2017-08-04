angular.module('app')
	.directive('roundyItem', ($timeout) => {
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'components/roundy/roundy-item.html',
			scope: {
				'index': '=',
				'item': '='
			},
			link: (scope) => {
				scope.roundyClass = `section-${scope.index}`;

				$timeout(function () {
					scope.visible = true;
				}, 100);
			}
		}
	})