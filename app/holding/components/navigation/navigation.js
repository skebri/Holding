angular.module('app')
	.directive('customNavigation', () => {
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'components/navigation/navigation.html',
			link: (scope) => {
				scope.items = [
					{
						label: 'home',
						slug: 'home'
					},
					{
						label: 'Our Mission',
						slug: 'our-mission'
					},
					{
						label: 'About us',
						slug: 'about-us'
					},
					{
						label: 'Contact us',
						slug: 'contact-us'
					},
					{
						label: 'page',
						slug: 'page'
					}
				];

				scope.toggleMenu = () => { scope.menuOpen = !scope.menuOpen; };
			}
		}
	})