var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
	$routeProvider

	.when('/', {
		controller: 'mainController',
		templateUrl: 'pages/searchResultPage.html'
	})
});

myApp.controller('mainController', ['$scope', '$location', function ($scope, $location) {
	$scope.person = {
		name: 'Sazzadur Rahman',
		house: 'H#25',
		location: 'PC Culture Housing Society, Shamoly',
		city: 'Dhaka',
		zip: '1200'
	};

	$scope.formattedAddress = function (person) {
		return person.house + ', ' + person.location + ', ' + person.city + ' ' + person.zip;
	}

	$scope.isActive = function (currentLocation) {
		return currentLocation == $location.path();
	};
}]);

myApp.directive('searchResult', function () {
	return {
		templateUrl: 'directives/searchResult.html',
		replace: true,
		scope: {
			personObject: '=',
			formattedAddressFunction: '&'
		}
	};
});