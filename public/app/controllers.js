var controllers = angular.module('myapp.controllers', ['mgcrea.ngStrap']);


controllers.controller('IndexController', ['$scope', function($scope){
    $scope.message = "Rainu Ittycheriah | Web Developer";
}]);

controllers.controller('ProjectsController', ['$scope', function($scope){
    $scope.message = "Rainu Ittycheriah | Web Developer";
    // $scope.quoteData = {"name":"root","children":[{"name":"routes","children":[{"name":"quotes.js","size":148,"language":"Javascript"},{"name":"users.js","size":83,"language":"Javascript"},{"name":"workPad.js","size":27,"language":"Javascript"},{"name":"index.js","size":6,"language":"Javascript"}]},{"name":"DB","children":[{"name":"quote.json","size":60,"language":"JSON"},{"name":"quoteseed.sh","size":6,"language":"Bourne Shell"}]},{"name":"app.js","size":43,"language":"Javascript"},{"name":"public","children":[{"name":"stylesheets","children":[{"name":"register.css","size":38,"language":"CSS"},{"name":"index.css","size":38,"language":"CSS"},{"name":"selectQ.css","size":30,"language":"CSS"},{"name":"create.css","size":26,"language":"CSS"},{"name":"home.css","size":22,"language":"CSS"}]},{"name":"javascripts","children":[{"name":"quoteHandler.js","size":21,"language":"Javascript"}]}]},{"name":"userController.js","size":35,"language":"Javascript"},{"name":"package.json","size":19,"language":"JSON"},{"name":"models","children":[{"name":"quote.js","size":8,"language":"Javascript"},{"name":"user.js","size":7,"language":"Javascript"}]},{"name":"db.js","size":7,"language":"Javascript"}]}
    // $scope.myQuoteProjFlower = new CodeFlower(".flowerDiv", 300, 200);
    // myflower.update(quoteData);
    $scope.projects = [
    {
        name: 'Nirvana.io',
        URL: 'https://github.com/Rittycheriah/RandomActs', 
        screenshot: '../images/1450877816.svg',
        description: 'This project is currently in progress. I am currently working on my final capstone which is a gamification of random acts of kindness. Application is being built using Web API 2 .NET Framework, Entity, AngularJS, jQuery, and Bootstrap. '
    },
    {
        name : 'realTr@cker',
        URL : 'https://github.com/Rittycheriah/capstone1', 
        screenshot : '../images/realtracker.jpg',
        description : 'Front end application utilizing MEAN stack technologies and Bootstrap to manage feedback from property showings. Application tracks calls, showings, and any feedback from each prospect.',
        myAppFlower : 'theotherone'
    },
    {
        name : 'Dually Quoted',
        URL : 'http://calm-oasis-7445.herokuapp.com/', 
        screenshot : '/images/DuallyQuoted.jpg',
        description : 'Front end application utilizing Firebase, Express, and Node.js helping to keep users inspired. Application features include storing quotes from the user and populating a random quotation for the user based off the desired mood selected.',
        myAppFlower: 'anotherone'       
    }
	];
}]);

controllers.controller('ResumeController', ['$scope', function($scope){
	$scope.message = "Rainu Ittycheriah | Web Developer";
}]);