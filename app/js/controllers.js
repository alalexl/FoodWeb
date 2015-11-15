'use strict';

var foodWebControllers = angular.module('foodWebControllers', ['chart.js']);

foodWebControllers.controller('HomeCtrl', ['$scope',
	function($scope) {

			$scope.labels = ["Hot Dog", "Hamburger", "Tzazitski Sauce"];
			$scope.pieData = [1000, 1500, 300];
			$scope.barData = [[1000, 1500, 300]];
		

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