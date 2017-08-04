;(function(){

'use strict';

angular.module('holding.templates', []).run(['$templateCache', function($templateCache) {

  $templateCache.put('base/base.html', '<div class="main-wrapper"><custom-navigation></custom-navigation><roundy></roundy></div>');

  $templateCache.put('components/navigation/navigation-item.html', '<li class="menuitem-wrapper" ng-click="onItemClick()" ng-class="{\'spin\': showSpin}"><div class="icon-holder"><a href="#" class="menu-item">{{ item }}</a></div><svg class="circle-holder"><circle r="88" cx="50%" cy="50%" fill="none"></circle></svg></li>');

  $templateCache.put('components/navigation/navigation.html', '<nav class="menu-wrapper"><button class="menu-btn" ng-click="toggleMenu()" ng-class="{\'clicked\': menuOpen}"><i></i> <i></i> <i></i> <span class="ripple"></span></button><ul class="menu" ng-class="{\'open\': menuOpen}"><navigation-item ng-repeat="item in items track by $index" index="$index" item="item" toggle-menu="toggleMenu"></navigation-item></ul></nav>');

  $templateCache.put('components/roundy/roundy-item.html', '<div class="section" ng-class="[roundyClass, {\'visible\': visible}]"><div class="content-wrap">{{item}}</div></div>');

  $templateCache.put('components/roundy/roundy.html', '<div class="roundy"><roundy-item ng-repeat="item in items track by $index" index="$index" item="item"></roundy-item><!-- div class="section section-2">\n    <div class="content-wrap">\n      Firma\n    </div>\n  </div>\n  <div class="section section-3">\n    <div class="content-wrap">\n      Firma\n    </div>\n  </div>\n  <div class="section section-4">\n    <div class="content-wrap">\n      Firma\n    </div>\n  </div>\n  <div class="section section-5">\n    <div class="content-wrap slika5">\n      Firma\n    </div>\n  </div>\n  <div class="section section-6">\n    <div class="content-wrap slika6">\n      Firma\n    </div>\n  </div>\n  <div class="section section-7">\n    <div class="content-wrap">\n      Firma\n    </div>\n  </div>\n  <div class="section section-8">\n    <div class="content-wrap">\n      Firma\n    </div>\n  </div> --></div>');

}]);

})();