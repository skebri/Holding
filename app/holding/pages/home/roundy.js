angular.module('app')
	.directive('roundy', () => {
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'pages/home/roundy.html',
			link: (scope) => {
				scope.items = [
					{
						label: 'Investment',
						slug: 'investment'
					},
					{
						label: 'Insurance',
						slug: 'insurance'
					},
					{
						label: 'Medical',
						slug: 'medical'
					},
					{
						label: 'Software',
						slug: 'software'
					},
					{
						label: 'Lawyer',
						slug: 'lawyer'
					},
					{
						label: 'Consulting',
						slug: 'consulting'
					},
					{
						label: 'Trading',
						slug: 'trading'
					},
					{
						label: 'Catering and food',
						slug: 'catering-and-food'
					},
					{
						label: 'Rent a car',
						slug: 'rent-a-car'
					},
				];
				
				scope.toggleMenu = () => {
					scope.menuOpen = !scope.menuOpen;
				};
			}
		}
	});