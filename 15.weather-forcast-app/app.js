var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

weatherApp.config(function ($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl: 'pages/home.html',
		controller: 'homeController'
	})

	.when('/forcast', {
		templateUrl: 'pages/forcast.html',
		controller: 'forcastController'
	})
});

weatherApp.service('cityService', function () {
	this.cityname = 'New Yourk, NY';
});

weatherApp.controller('homeController', ['$scope', 'cityService', function ($scope, cityService) {
	$scope.cityname = cityService.cityname;

	$scope.$watch('cityname', function () {
		cityService.cityname = $scope.cityname;
	});
}]);

weatherApp.controller('forcastController', ['$scope', 'cityService', function ($scope, cityService) {
	$scope.cityname = cityService.cityname;
}]);