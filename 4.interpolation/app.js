var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$timeout', function ($scope, $timeout) {
	$scope.name = "Shuvo";

	$timeout(function () {
		$scope.name = 'Everyone'
	}, 3000);
}]);