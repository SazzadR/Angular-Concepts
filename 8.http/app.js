var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$log', '$http', '$filter', function ($scope, $log, $http, $filter) {
	$http({
		method: 'GET',
		url: 'http://jsonplaceholder.typicode.com/posts'
	}).then(function (response) {
		$scope.responseDataSet = response.data;
		// $log.log($scope.responseDataSet);
	});

	$scope.toUpperCase = function (data) {
		return $filter('uppercase')(data);
	}
}]);