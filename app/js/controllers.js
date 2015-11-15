'use strict';

var foodWebControllers = angular.module('foodWebControllers', ['chart.js']);

foodWebControllers.controller('LoginCtrl', ['$scope',
	function($scope) {


	}]);

foodWebControllers.controller('HomeCtrl', ['$scope',
	function($scope) {

			$scope.labels = ['Hot Dog', 'Hamburger', 'Tzazitski Sauce'];
			$scope.pieData = [1000, 1500, 300];
			$scope.barData = [[2500], [2390]];
			$scope.series = ['You', 'Minimum'];
			$scope.barLabels = ['Calories'];
		

	}]);

foodWebControllers.controller('ConsumedCtrl', ['$scope',
	function($scope) {

	}]);

foodWebControllers.controller('RecommendationsCtrl', ['$scope',
	function($scope) {

	}]);

foodWebControllers.controller('ProfileCtrl', ['$scope',
	function($scope) {

	}]);