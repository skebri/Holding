angular.module('app')
	.directive('roundyItem', ($timeout, ngDialog) => {
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'pages/home/roundy-item.html',
			scope: {
				'index': '=',
				'item': '='
			},
			link: (scope) => {
				scope.roundyClass = `section-${scope.index}`;

				scope.openModal = () => {
					console.log("DSADAS");
					ngDialog.open({
						template: 'modals/modal.html'
					})
				};

				$timeout(function () {
					scope.visible = true;
				}, 100);
			}
		}
	})