(function() {

  var foodWebApp = angular.module('foodWebApp', [
    'ngRoute',
    'foodWebControllers',
    'chart.js'
    
    ]);

  foodWebApp.config(['$routeProvider',

    function ($routeProvider) {

      $routeProvider
      .when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      })
      .when('/consumed', {
        templateUrl: 'partials/consumed.html',
        controller: 'ConsumedCtrl'
      })
      .when('/recommendations', {
        templateUrl: 'partials/recommendations.html',
        controller: 'RecommendationsCtrl'
      })
      .when('/profile', {
        templateUrl: 'partials/profile.html',
        controller: 'ProfileCtrl'
      });
    }
    ])
})();