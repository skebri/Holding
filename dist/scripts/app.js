'use strict';

angular.module('app', ['ui.router', 'modelicco.templates', 'ngSanitize', 'angularMoment', 'ngDialog']).config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$injector', '$httpProvider', function ($stateProvider, $urlRouterProvider, $locationProvider, $injector, $httpProvider) {}]);

setTimeout(function () {
  $('.section').toggleClass('visible');
}, 100);
//============================================================Animation2

$('[has-ripple="true"]').click(function () {
  $(this).toggleClass('clicked');
  $('.menu').toggleClass('open');
});

$('.menu a').each(function (index) {
  var thismenuItem = $(this);

  thismenuItem.click(function (event) {
    event.preventDefault();

    $('.menuitem-wrapper').eq(index).addClass('spin');

    var timer = setTimeout(function () {
      $('body').removeAttr('class').addClass('bg-' + index);
      $('.menuitem-wrapper').eq(index).removeClass('spin');
      $('.menu').removeClass('open');
      $('.menu-btn').removeClass('clicked');
    }, 800);
  });
});
'use strict';

angular.module('app').controller('baseCtrl', function () {
	console.log("BASE CTRL");
});
'use strict';

angular.module('app').config(['$stateProvider', '$locationProvider', '$httpProvider', '$urlRouterProvider', 'ngDialogProvider', function ($stateProvider, $locationProvider, $httpProvider, $urlRouterProvider, ngDialogProvider) {

    ngDialogProvider.setDefaults({
        className: 'ngdialog-theme-default',
        showClose: false
    });

    $stateProvider.state('app', {
        url: "/",
        controller: function controller() {
            console.log("DSADASD");
        },
        template: '../app/holding/base/base.html'
    });

    if (window.history && window.history.pushState) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        }).hashPrefix('');
    }
}]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwiYmFzZS9iYXNlQ3RybC5qcyIsInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiY29uZmlnIiwiJHN0YXRlUHJvdmlkZXIiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCIkbG9jYXRpb25Qcm92aWRlciIsIiRpbmplY3RvciIsIiRodHRwUHJvdmlkZXIiLCJzZXRUaW1lb3V0IiwiJCIsInRvZ2dsZUNsYXNzIiwiY2xpY2siLCJlYWNoIiwiaW5kZXgiLCJ0aGlzbWVudUl0ZW0iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZXEiLCJhZGRDbGFzcyIsInRpbWVyIiwicmVtb3ZlQXR0ciIsInJlbW92ZUNsYXNzIiwiY29udHJvbGxlciIsImNvbnNvbGUiLCJsb2ciLCJuZ0RpYWxvZ1Byb3ZpZGVyIiwic2V0RGVmYXVsdHMiLCJjbGFzc05hbWUiLCJzaG93Q2xvc2UiLCJzdGF0ZSIsInVybCIsInRlbXBsYXRlIiwid2luZG93IiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImh0bWw1TW9kZSIsImVuYWJsZWQiLCJyZXF1aXJlQmFzZSIsImhhc2hQcmVmaXgiXSwibWFwcGluZ3MiOiJBQUFBOztBQUFBQSxRQUFRQyxPQUFPLE9BQU8sQ0FBQyxhQUFhLHVCQUF1QixjQUFjLGlCQUFpQixhQUNyRkMsbUdBQU8sVUFBQ0MsZ0JBQWdCQyxvQkFBb0JDLG1CQUFtQkMsV0FBV0MsZUFBa0I7O0FBRWpHQyxXQUFXLFlBQVk7RUFDckJDLEVBQUUsWUFBWUMsWUFBWTtHQUN6Qjs7O0FBR0hELEVBQUUsdUJBQXVCRSxNQUFNLFlBQVk7RUFDekNGLEVBQUUsTUFBTUMsWUFBWTtFQUNwQkQsRUFBRSxTQUFTQyxZQUFZOzs7QUFHekJELEVBQUUsV0FBV0csS0FBSyxVQUFVQyxPQUFPO0VBQ2pDLElBQUlDLGVBQXNCTCxFQUFFOztFQUU1QkssYUFBYUgsTUFBTSxVQUFVSSxPQUFPO0lBQ2xDQSxNQUFNQzs7SUFFTlAsRUFBRSxxQkFBcUJRLEdBQUdKLE9BQU9LLFNBQVM7O0lBRTFDLElBQUlDLFFBQVFYLFdBQVcsWUFBWTtNQUNqQ0MsRUFBRSxRQUFRVyxXQUFXLFNBQVNGLFNBQVMsUUFBTUw7TUFDN0NKLEVBQUUscUJBQXFCUSxHQUFHSixPQUFPUSxZQUFZO01BQzdDWixFQUFFLFNBQVNZLFlBQVk7TUFDdkJaLEVBQUUsYUFBYVksWUFBWTtPQUMxQjs7R0FiUDtBQ2JBOztBQUFBckIsUUFBUUMsT0FBTyxPQUNicUIsV0FBVyxZQUFZLFlBQU07Q0FDN0JDLFFBQVFDLElBQUk7R0FGZDtBQ0FBOztBQUFBeEIsUUFBUUMsT0FBTyxPQUNOQywwR0FBTyxVQUFDQyxnQkFBZ0JFLG1CQUFtQkUsZUFBZUgsb0JBQW9CcUIsa0JBQXFCOztJQUVoR0EsaUJBQWlCQyxZQUFZO1FBQ3pCQyxXQUFXO1FBQ1hDLFdBQVc7OztJQUdmekIsZUFDSzBCLE1BQU0sT0FBTztRQUNWQyxLQUFJO1FBQ0pSLFlBQVksU0FBQSxhQUFNO1lBQ2pCQyxRQUFRQyxJQUFJOztRQUViTyxVQUFVOzs7SUFHbEIsSUFBSUMsT0FBT0MsV0FBV0QsT0FBT0MsUUFBUUMsV0FBVztRQUM1QzdCLGtCQUFrQjhCLFVBQVU7WUFDeEJDLFNBQVM7WUFDVEMsYUFBYTtXQUNkQyxXQUFXOztJQXJCOUIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFsndWkucm91dGVyJywgJ21vZGVsaWNjby50ZW1wbGF0ZXMnLCAnbmdTYW5pdGl6ZScsICdhbmd1bGFyTW9tZW50JywgJ25nRGlhbG9nJ10pXHJcbiAgICAuY29uZmlnKCgkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlciwgJGluamVjdG9yLCAkaHR0cFByb3ZpZGVyKSA9PiB7fSk7XHJcblxyXG5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAkKCcuc2VjdGlvbicpLnRvZ2dsZUNsYXNzKCd2aXNpYmxlJyk7XHJcbn0sIDEwMCk7XHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09QW5pbWF0aW9uMlxyXG5cclxuJCgnW2hhcy1yaXBwbGU9XCJ0cnVlXCJdJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICQodGhpcykudG9nZ2xlQ2xhc3MoJ2NsaWNrZWQnKTtcclxuICAkKCcubWVudScpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcbn0pO1xyXG5cclxuJCgnLm1lbnUgYScpLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgdmFyIHRoaXNtZW51SXRlbSAgICAgICAgPSAkKHRoaXMpO1xyXG4gIFxyXG4gIHRoaXNtZW51SXRlbS5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBcclxuICAgICQoJy5tZW51aXRlbS13cmFwcGVyJykuZXEoaW5kZXgpLmFkZENsYXNzKCdzcGluJyk7XHJcbiAgICBcclxuICAgIHZhciB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKCdib2R5JykucmVtb3ZlQXR0cignY2xhc3MnKS5hZGRDbGFzcygnYmctJytpbmRleCk7XHJcbiAgICAgICQoJy5tZW51aXRlbS13cmFwcGVyJykuZXEoaW5kZXgpLnJlbW92ZUNsYXNzKCdzcGluJyk7XHJcbiAgICAgICQoJy5tZW51JykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgJCgnLm1lbnUtYnRuJykucmVtb3ZlQ2xhc3MoJ2NsaWNrZWQnKTtcclxuICAgIH0sIDgwMCk7XHJcbiAgfSk7XHJcbn0pOyIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG5cdC5jb250cm9sbGVyKCdiYXNlQ3RybCcsICgpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKFwiQkFTRSBDVFJMXCIpO1x0XHJcblx0fSk7IiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgICAgICAgLmNvbmZpZygoJHN0YXRlUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyLCAkaHR0cFByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIsIG5nRGlhbG9nUHJvdmlkZXIpID0+IHtcclxuXHJcbiAgICAgICAgICAgIG5nRGlhbG9nUHJvdmlkZXIuc2V0RGVmYXVsdHMoe1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnbmdkaWFsb2ctdGhlbWUtZGVmYXVsdCcsXHJcbiAgICAgICAgICAgICAgICBzaG93Q2xvc2U6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJHN0YXRlUHJvdmlkZXJcclxuICAgICAgICAgICAgICAgIC5zdGF0ZSgnYXBwJywge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDpcIi9cIixcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHRjb25zb2xlLmxvZyhcIkRTQURBU0RcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJy4uL2FwcC9ob2xkaW5nL2Jhc2UvYmFzZS5odG1sJyBcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBpZiAod2luZG93Lmhpc3RvcnkgJiYgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICAkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZUJhc2U6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9KS5oYXNoUHJlZml4KCcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4iXX0=
