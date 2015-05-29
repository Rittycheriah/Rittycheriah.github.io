var controllers = angular.module('myapp.controllers', ['mgcrea.ngStrap']);

controllers.controller('IndexController', ['$scope', function($scope){
	$scope.message = "Rainu Ittycheriah | Web Developer";
	$scope.name = "Dis is my PortFolio";
}]);

controllers.controller('ProjectsController', ['$scope', function($scope){
	$scope.message = "Rainu Ittycheriah | Web Developer";
}]);

controllers.controller('ResumeController', ['$scope', function($scope){
	$scope.message = "Rainu's Resume";
}]);