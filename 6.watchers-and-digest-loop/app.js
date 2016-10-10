var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$timeout', function ($scope, $filter, $timeout) {

	$scope.handle = '';

	$scope.tolowerCaseHandle = function () {
		return $filter('lowercase')($scope.handle);
	};

	$scope.$watch('handle', function (newValue, oldValue) {
		console.info('Changed!');
		console.log('New value: ' + newValue);
		console.log('Old value: ' + oldValue);
	});

	setTimeout(function () {
		$scope.$apply(function () {
			$scope.handle = 'new value';
			console.warn($scope.handle);
		});
	}, 3000);

	/**
	 * using native angular $timeout service
	 */
	/*$timeout(function () {
		$scope.handle = 'new value';
		console.warn($scope.handle);
	}, 3000);*/
}]);