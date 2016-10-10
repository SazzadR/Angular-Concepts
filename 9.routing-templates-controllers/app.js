var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl: 'pages/home.html',
		controller: 'homeController'
	})

	.when('/about/:person?', {
		templateUrl: 'pages/about.html',
		controller: 'aboutController'
	})
});

myApp.controller('mainController', ['$scope', '$location', function ($scope, $location) {
	$scope.isActive = function (currentLocation) {
		return currentLocation == $location.path();
	};
}]);

myApp.controller('homeController', ['$scope', '$log', function ($scope, $log) {
	$scope.homePageContent = 'Home Page Content Goes Here';
}]);

myApp.controller('aboutController', ['$scope', '$log', '$routeParams', '$filter', function ($scope, $log, $routeParams, $filter) {
	$scope.aboutPageContent = 'About Page Content Goes Here';
	$scope.person = $filter('uppercase')($routeParams.person) || 'Everybody';
}]);