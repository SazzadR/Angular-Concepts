var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function ($scope, $filter) {

	$scope.handle = '';
	$scope.characters = 6;

	$scope.tolowerCaseHandle = function () {
		return $filter('lowercase')($scope.handle);
	};
}]);