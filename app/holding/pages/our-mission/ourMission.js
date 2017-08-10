angular.module('app')
	.directive('ourMission', () => {
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'pages/our-mission/our-mission.html',
			link: (scope) => {
			}
		}
	})