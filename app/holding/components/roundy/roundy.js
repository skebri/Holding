angular.module('app')
	.directive('roundy', () => {
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'components/roundy/roundy.html',
			link: (scope) => {
				scope.items = ['firma', 'firma', 'firma', 'firma', 'firma', 'firma', 'firma', 'firma'];

				scope.toggleMenu = () => {
					scope.menuOpen = !scope.menuOpen;
				};
			}
		}
	})