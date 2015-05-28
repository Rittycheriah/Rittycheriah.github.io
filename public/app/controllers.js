var controllers = angular.module('myapp.controllers', ['mgcrea.ngStrap']);

controllers.controller('IndexController', ['$scope', function($scope){
	$scope.message = "Rainu Ittycheriah | Web Developer";
	$scope.name = "Dis is my PortFolio";
}]);

controllers.controller('AboutController', ['$scope', function($scope){
	$scope.message = "Work it About Page";
}]);