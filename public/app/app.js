var app = angular.module('everyThing', ['ngRoute', 'myapp.controllers']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/', {templateUrl: 'partials/index', controller: 'IndexController'})
	.when('/projects', {templateUrl: 'partials/projects', controller: 'ProjectsController'})
	.when('/resume', {templateUrl: 'partials/resume', controller: 'ResumeController'})
	.otherwise({redirectTo:'/'})
}])

.config(['$locationProvider', function($locationProvider){
	$locationProvider.html5Mode(true);
}])