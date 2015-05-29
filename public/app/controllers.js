var controllers = angular.module('myapp.controllers', ['mgcrea.ngStrap']);

controllers.controller('IndexController', ['$scope', function($scope){
	$scope.message = "Rainu Ittycheriah | Web Developer";
}]);

controllers.controller('ProjectsController', ['$scope', function($scope){
	$scope.message = "Rainu Ittycheriah | Web Developer";
	$scope.projects = [
	  {name : 'Dually Quoted',
     URL : 'heroku', 
     screenshot : '/images',
     description : 'An MongoDB, Express, and EJS app designed to keep you inspired. This app stores and creates quotations. Inversely, if you want a quote based on your mood, you can select a mood and the app will randomly populate one for you',
     contributors : 'Rainu Ittycheriah and Nikki Ahima'
    }, 
    {name : 'My 1st Capstone',
     URL : '/awesomesauce', 
     screenshot : '/images/',
     description : 'what you said',
     contributors : 'Rainu Ittycheriah'
    },
	];
}]);

controllers.controller('ResumeController', ['$scope', function($scope){
	$scope.message = "Rainu Ittycheriah | Web Developer";
}]);