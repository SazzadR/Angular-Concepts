weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function ($scope, $location, cityService) {
	$scope.cityname = cityService.cityname;

	$scope.$watch('cityname', function () {
		cityService.cityname = $scope.cityname;
	});

	$scope.submit = function () {
		$location.path('/forcast');
	};
}]);

weatherApp.controller('forcastController', ['$scope', '$resource', 'cityService', function ($scope, $resource, cityService) {
	$scope.cityname = cityService.cityname;

	// $scope.weatherAPI = $resource('http://api.worldweatheronline.com/free/v1/weather.ashx?q=Karachi&format=JSON&extra=undefined&num_of_days=2&date=&fx=&cc=&includelocation=&show_comments=&key=xkq544hkar4m69qujdgujn7w', { callback: 'JSON_CALLBACK' }, { get: { method: 'JSONP' }});

	$scope.weatherAPI = $resource('http://api.worldweatheronline.com/free/v1/weather.ashx?q='+$scope.cityname+'&key=xkq544hkar4m69qujdgujn7w', { callback: 'JSON_CALLBACK' }, { get: { method: 'JSONP' }});

	$scope.weatherResults = $scope.weatherAPI.get({ format: 'JSON', num_of_days: 2 });
}]);