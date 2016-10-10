var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function ($scope, $filter) {

	$scope.twitterHandle = "";

	$scope.lowercaseHandle = function () {
		return $filter('lowercase')($scope.twitterHandle);
	}
}]);