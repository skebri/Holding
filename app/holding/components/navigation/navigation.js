angular.module('app')
	.directive('customNavigation', () => {
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'components/navigation/navigation.html',
			link: (scope) => {
				scope.items = ['home', 'page', 'android', 'shopping', 'room'];
				
				scope.toggleMenu = () => {
					scope.menuOpen = !scope.menuOpen;
				};
			}
		}
	})