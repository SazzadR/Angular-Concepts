var myApp = angular.module('myApp', ['ngMessages']);

myApp.controller('mainController', function ($scope, $log, $filter) {
	$scope.originalText = 'sazzad';
	$scope.uppercaseText = $filter('uppercase')($scope.originalText);

	$log.info($scope.uppercaseText);
});