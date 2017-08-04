angular.module('app')
	.directive('customNavigation', () => {
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'components/navigation/navigation.html',
			link: (scope) => {
				scope.items = ['home', 'face', 'android', 'shopping', 'room'];
				console.log("nav");
				scope.toggleMenu = () => {
					scope.menuOpen = !scope.menuOpen;
				};
			}
		}
	})