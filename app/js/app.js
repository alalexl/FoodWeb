(function() {

  var foodWebApp = angular.module('foodWebApp', [
    'ngRoute',
    'foodWebControllers',
    'chart.js',
    'xeditable'
    
    ]);

  foodWebApp.config(['$routeProvider',

    function ($routeProvider) {

      $routeProvider
      .when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl'
      })
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