var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
	$routeProvider

	.when('/', {
		controller: 'mainController'
	})

	.when('/page1', {
		templateUrl: 'pages/page1.html',
		controller: 'page1Controller'
	})

	.when('/page2', {
		templateUrl: 'pages/page2.html',
		controller: 'page2Controller'
	})
});

myApp.service('nameService', function () {
	var self = this;

	this.name = 'John Doe';

	this.nameLength = function () {
		return self.name.length;
	};
});

myApp.controller('mainController', ['$scope', '$location', function ($scope, $location) {
	$scope.isActive = function (currentLocation) {
		return currentLocation == $location.path();
	}
}]);

myApp.controller('page1Controller', ['$scope', 'nameService', function ($scope, nameService) {
	$scope.name = nameService.name;

	$scope.nameLength = function () {
		return nameService.nameLength();
	}

	$scope.$watch('name', function () {
		nameService.name = $scope.name;
	});
}]);

myApp.controller('page2Controller', ['$scope', 'nameService', function ($scope, nameService) {
	$scope.name = nameService.name;

	$scope.nameLength = function () {
		return nameService.nameLength();
	}

	$scope.$watch('name', function () {
		nameService.name = $scope.name;
	});
}]);