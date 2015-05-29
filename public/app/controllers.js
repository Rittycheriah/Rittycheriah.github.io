var controllers = angular.module('myapp.controllers', ['mgcrea.ngStrap']);

controllers.controller('IndexController', ['$scope', function($scope){
	$scope.message = "Rainu Ittycheriah | Web Developer";
	$scope.name = "Dis is my PortFolio";
}]);

controllers.controller('ProjectsController', ['$scope', function($scope){
	$scope.message = "Rainu Ittycheriah | Web Developer";
	$scope.projects = [
	  {name : 'Dually Quoted',
     URL : 'heroku', 
     description : 'An MongoDB, Express, and EJS app designed to keep you inspired. This app stores and creates quotations. Inversely, if you want a quote based on your mood, you can select a mood and the app will randomly populate one for you',
     contributors : 'Rainu Ittycheriah and Nikki Ahima'
    }
	];
}]);

controllers.controller('ResumeController', ['$scope', function($scope){
	$scope.message = "Rainu's Resume";
}]);