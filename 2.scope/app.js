var myApp = angular.module('myApp', []);

myApp.controller('mainController', function ($scope) {
	console.log($scope);

	$scope.firstName = 'John';
	$scope.lastName = 'Doe';

	$scope.logPerson = function () {
		console.log($scope.firstName + ' ' + $scope.lastName);
	};

	$scope.logPerson();
});