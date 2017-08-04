'use strict';

angular.module('app', ['ui.router', 'holding.templates', 'ngSanitize', 'ngDialog']).config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$injector', '$httpProvider', function ($stateProvider, $urlRouterProvider, $locationProvider, $injector, $httpProvider) {}]);
'use strict';

angular.module('app').directive('roundyItem', ['$timeout', function ($timeout) {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'components/roundy/roundy-item.html',
		scope: {
			'index': '=',
			'item': '='
		},
		link: function link(scope) {
			scope.roundyClass = 'section-' + scope.index;

			$timeout(function () {
				scope.visible = true;
			}, 100);
		}
	};
}]);
'use strict';

angular.module('app').directive('roundy', function () {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'components/roundy/roundy.html',
		link: function link(scope) {
			scope.items = ['firma', 'firma', 'firma', 'firma', 'firma', 'firma', 'firma', 'firma'];

			scope.toggleMenu = function () {
				scope.menuOpen = !scope.menuOpen;
			};
		}
	};
});
'use strict';

angular.module('app').directive('navigationItem', ['$timeout', function ($timeout) {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'components/navigation/navigation-item.html',
		scope: {
			'index': '=',
			'item': '=',
			'toggleMenu': '='
		},
		link: function link(scope) {
			console.log('navigationItem', scope.index, scope.item);

			scope.onItemClick = function ($event) {
				scope.showSpin = true;

				$timeout(function () {
					scope.showSpin = false;
					scope.toggleMenu();
				}, 800);
			};
		}
	};
}]);
'use strict';

angular.module('app').directive('customNavigation', function () {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'components/navigation/navigation.html',
		link: function link(scope) {
			scope.items = ['home', 'face', 'android', 'shopping', 'room'];
			console.log("nav");
			scope.toggleMenu = function () {
				scope.menuOpen = !scope.menuOpen;
			};
		}
	};
});
'use strict';

angular.module('app').directive('navigation', function () {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'components/navigation/navigation.html',
		link: function link(scope) {
			console.log('navigation');
		}
	};
});
'use strict';

angular.module('app').controller('baseCtrl', ['$scope', function ($scope) {}]);
'use strict';

angular.module('app').config(['$stateProvider', 'ngDialogProvider', '$locationProvider', function ($stateProvider, ngDialogProvider, $locationProvider) {

    ngDialogProvider.setDefaults({
        className: 'ngdialog-theme-default',
        showClose: false
    });

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'base/base.html',
        controller: 'baseCtrl'
    });

    if (window.history && window.history.pushState) {
        $locationProvider.hashPrefix(''); // by default '!'
        $locationProvider.html5Mode(true);
    }
}]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwiY29tcG9uZW50cy9yb3VuZHkvcm91bmR5SXRlbS5qcyIsImNvbXBvbmVudHMvcm91bmR5L3JvdW5keS5qcyIsImNvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uSXRlbS5qcyIsImNvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmpzIiwiY29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzIiwiYmFzZS9iYXNlQ3RybC5qcyIsInJvdXRlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFBQSxRQUFRLE9BQU8sT0FBTyxDQUFDLGFBQWEscUJBQXFCLGNBQWMsYUFDbEUsbUdBQU8sVUFBQyxnQkFBZ0Isb0JBQW9CLG1CQUFtQixXQUFXLGVBQWtCLEtBQUk7QUNEckc7O0FBQUEsUUFBUSxPQUFPLE9BQ2IsVUFBVSwyQkFBYyxVQUFDLFVBQWE7Q0FDdEMsT0FBTztFQUNOLFVBQVU7RUFDVixTQUFTO0VBQ1QsYUFBYTtFQUNiLE9BQU87R0FDTixTQUFTO0dBQ1QsUUFBUTs7RUFFVCxNQUFNLFNBQUEsS0FBQyxPQUFVO0dBQ2hCLE1BQU0sY0FBVyxhQUFjLE1BQU07O0dBRXJDLFNBQVMsWUFBWTtJQUNwQixNQUFNLFVBQVU7TUFDZDs7O0lBR0o7QUNsQkg7O0FBQUEsUUFBUSxPQUFPLE9BQ2IsVUFBVSxVQUFVLFlBQU07Q0FDMUIsT0FBTztFQUNOLFVBQVU7RUFDVixTQUFTO0VBQ1QsYUFBYTtFQUNiLE1BQU0sU0FBQSxLQUFDLE9BQVU7R0FDaEIsTUFBTSxRQUFRLENBQUMsU0FBUyxTQUFTLFNBQVMsU0FBUyxTQUFTLFNBQVMsU0FBUzs7R0FFOUUsTUFBTSxhQUFhLFlBQU07SUFDeEIsTUFBTSxXQUFXLENBQUMsTUFBTTs7OztHQUkxQjtBQ2RIOztBQUFBLFFBQVEsT0FBTyxPQUNiLFVBQVUsK0JBQWtCLFVBQUMsVUFBYTtDQUMxQyxPQUFPO0VBQ04sVUFBVTtFQUNWLFNBQVM7RUFDVCxhQUFhO0VBQ2IsT0FBTztHQUNOLFNBQVM7R0FDVCxRQUFRO0dBQ1IsY0FBYzs7RUFFZixNQUFNLFNBQUEsS0FBQyxPQUFVO0dBQ2hCLFFBQVEsSUFBSSxrQkFBa0IsTUFBTSxPQUFPLE1BQU07O0dBRWpELE1BQU0sY0FBYyxVQUFDLFFBQVc7SUFDL0IsTUFBTSxXQUFXOztJQUVqQixTQUFTLFlBQU07S0FDZCxNQUFNLFdBQVc7S0FDakIsTUFBTTtPQUNKOzs7O0lBSUw7QUN4Qkg7O0FBQUEsUUFBUSxPQUFPLE9BQ2IsVUFBVSxvQkFBb0IsWUFBTTtDQUNwQyxPQUFPO0VBQ04sVUFBVTtFQUNWLFNBQVM7RUFDVCxhQUFhO0VBQ2IsTUFBTSxTQUFBLEtBQUMsT0FBVTtHQUNoQixNQUFNLFFBQVEsQ0FBQyxRQUFRLFFBQVEsV0FBVyxZQUFZO0dBQ3RELFFBQVEsSUFBSTtHQUNaLE1BQU0sYUFBYSxZQUFNO0lBQ3hCLE1BQU0sV0FBVyxDQUFDLE1BQU07Ozs7R0FJMUI7QUNkSDs7QUFBQSxRQUFRLE9BQU8sT0FDYixVQUFVLGNBQWMsWUFBTTtDQUM5QixPQUFPO0VBQ04sVUFBVTtFQUNWLFNBQVM7RUFDVCxhQUFhO0VBQ2IsTUFBTSxTQUFBLEtBQUMsT0FBVTtHQUNoQixRQUFRLElBQUk7OztHQUdiO0FDVkg7O0FBQUEsUUFBUSxPQUFPLE9BQ2IsV0FBVyx1QkFBWSxVQUFDLFFBQVcsS0FFakM7QUNISjs7QUFBQSxRQUFRLE9BQU8sT0FDTixtRUFBTyxVQUFDLGdCQUFnQixrQkFBa0IsbUJBQXNCOztJQUU3RCxpQkFBaUIsWUFBWTtRQUN6QixXQUFXO1FBQ1gsV0FBVzs7O0lBR2pCLGVBQ0csTUFBTSxRQUFRO1FBQ1gsS0FBSztRQUNMLGFBQWE7UUFDYixZQUFZOzs7SUFHaEIsSUFBSSxPQUFPLFdBQVcsT0FBTyxRQUFRLFdBQVc7UUFDNUMsa0JBQWtCLFdBQVc7UUFDN0Isa0JBQWtCLFVBQVU7O0lBRWpDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbJ3VpLnJvdXRlcicsICdob2xkaW5nLnRlbXBsYXRlcycsICduZ1Nhbml0aXplJywgJ25nRGlhbG9nJ10pXG4gICAgLmNvbmZpZygoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIsICRpbmplY3RvciwgJGh0dHBQcm92aWRlcikgPT4ge30pOyIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuXHQuZGlyZWN0aXZlKCdyb3VuZHlJdGVtJywgKCR0aW1lb3V0KSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHJlc3RyaWN0OiAnRScsXG5cdFx0XHRyZXBsYWNlOiB0cnVlLFxuXHRcdFx0dGVtcGxhdGVVcmw6ICdjb21wb25lbnRzL3JvdW5keS9yb3VuZHktaXRlbS5odG1sJyxcblx0XHRcdHNjb3BlOiB7XG5cdFx0XHRcdCdpbmRleCc6ICc9Jyxcblx0XHRcdFx0J2l0ZW0nOiAnPSdcblx0XHRcdH0sXG5cdFx0XHRsaW5rOiAoc2NvcGUpID0+IHtcblx0XHRcdFx0c2NvcGUucm91bmR5Q2xhc3MgPSBgc2VjdGlvbi0ke3Njb3BlLmluZGV4fWA7XG5cblx0XHRcdFx0JHRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHNjb3BlLnZpc2libGUgPSB0cnVlO1xuXHRcdFx0XHR9LCAxMDApO1xuXHRcdFx0fVxuXHRcdH1cblx0fSkiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcblx0LmRpcmVjdGl2ZSgncm91bmR5JywgKCkgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRyZXN0cmljdDogJ0UnLFxuXHRcdFx0cmVwbGFjZTogdHJ1ZSxcblx0XHRcdHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy9yb3VuZHkvcm91bmR5Lmh0bWwnLFxuXHRcdFx0bGluazogKHNjb3BlKSA9PiB7XG5cdFx0XHRcdHNjb3BlLml0ZW1zID0gWydmaXJtYScsICdmaXJtYScsICdmaXJtYScsICdmaXJtYScsICdmaXJtYScsICdmaXJtYScsICdmaXJtYScsICdmaXJtYSddO1xuXG5cdFx0XHRcdHNjb3BlLnRvZ2dsZU1lbnUgPSAoKSA9PiB7XG5cdFx0XHRcdFx0c2NvcGUubWVudU9wZW4gPSAhc2NvcGUubWVudU9wZW47XG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0fVxuXHR9KSIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuXHQuZGlyZWN0aXZlKCduYXZpZ2F0aW9uSXRlbScsICgkdGltZW91dCkgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRyZXN0cmljdDogJ0UnLFxuXHRcdFx0cmVwbGFjZTogdHJ1ZSxcblx0XHRcdHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24taXRlbS5odG1sJyxcblx0XHRcdHNjb3BlOiB7XG5cdFx0XHRcdCdpbmRleCc6ICc9Jyxcblx0XHRcdFx0J2l0ZW0nOiAnPScsXG5cdFx0XHRcdCd0b2dnbGVNZW51JzogJz0nXG5cdFx0XHR9LFxuXHRcdFx0bGluazogKHNjb3BlKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCduYXZpZ2F0aW9uSXRlbScsIHNjb3BlLmluZGV4LCBzY29wZS5pdGVtKTtcblxuXHRcdFx0XHRzY29wZS5vbkl0ZW1DbGljayA9ICgkZXZlbnQpID0+IHtcblx0XHRcdFx0XHRzY29wZS5zaG93U3BpbiA9IHRydWU7XG5cblx0XHRcdFx0XHQkdGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRzY29wZS5zaG93U3BpbiA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0c2NvcGUudG9nZ2xlTWVudSgpO1xuXHRcdFx0XHRcdH0sIDgwMCk7XG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0fVxuXHR9KSIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuXHQuZGlyZWN0aXZlKCdjdXN0b21OYXZpZ2F0aW9uJywgKCkgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRyZXN0cmljdDogJ0UnLFxuXHRcdFx0cmVwbGFjZTogdHJ1ZSxcblx0XHRcdHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uaHRtbCcsXG5cdFx0XHRsaW5rOiAoc2NvcGUpID0+IHtcblx0XHRcdFx0c2NvcGUuaXRlbXMgPSBbJ2hvbWUnLCAnZmFjZScsICdhbmRyb2lkJywgJ3Nob3BwaW5nJywgJ3Jvb20nXTtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJuYXZcIik7XG5cdFx0XHRcdHNjb3BlLnRvZ2dsZU1lbnUgPSAoKSA9PiB7XG5cdFx0XHRcdFx0c2NvcGUubWVudU9wZW4gPSAhc2NvcGUubWVudU9wZW47XG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0fVxuXHR9KSIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuXHQuZGlyZWN0aXZlKCduYXZpZ2F0aW9uJywgKCkgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRyZXN0cmljdDogJ0UnLFxuXHRcdFx0cmVwbGFjZTogdHJ1ZSxcblx0XHRcdHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uaHRtbCcsXG5cdFx0XHRsaW5rOiAoc2NvcGUpID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ25hdmlnYXRpb24nKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG5cdC5jb250cm9sbGVyKCdiYXNlQ3RybCcsICgkc2NvcGUpID0+IHtcblx0XHRcblx0fSk7IiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4gICAgICAgIC5jb25maWcoKCRzdGF0ZVByb3ZpZGVyLCBuZ0RpYWxvZ1Byb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcikgPT4ge1xuXG4gICAgICAgICAgICBuZ0RpYWxvZ1Byb3ZpZGVyLnNldERlZmF1bHRzKHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICduZ2RpYWxvZy10aGVtZS1kZWZhdWx0JyxcbiAgICAgICAgICAgICAgICBzaG93Q2xvc2U6IGZhbHNlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2hvbWUnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnLycsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdiYXNlL2Jhc2UuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ2Jhc2VDdHJsJ1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh3aW5kb3cuaGlzdG9yeSAmJiB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUpIHtcbiAgICAgICAgICAgICAgICAkbG9jYXRpb25Qcm92aWRlci5oYXNoUHJlZml4KCcnKTsgLy8gYnkgZGVmYXVsdCAnISdcbiAgICAgICAgICAgICAgICAkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4iXX0=
