var controllers = angular.module('myapp.controllers', []);

controllers.controller('IndexController', ['$scope', function($scope){
	$scope.message = "Work it Index Portfolio Pg";
}]);

controllers.controller('AboutController', ['$scope', function($scope){
	$scope.message = "Work it About Page";
}]);