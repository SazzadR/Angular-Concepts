var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
	$routeProvider

	.when('/', {
		controller: 'mainController',
		templateUrl: 'pages/searchResult.html'
	})
});

myApp.controller('mainController', ['$scope', '$location', function ($scope, $location) {
	$scope.isActive = function (currentLocation) {
		return currentLocation == $location.path();
	}
}]);

myApp.directive('searchResult', function () {
	return {
		templateUrl: 'directives/searchResult.html',
		replace: true
	}
});