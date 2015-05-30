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
      {name : 'Dually Quoted',
     URL : 'heroku', 
     screenshot : '/images',
     description : 'An MongoDB, Express, and EJS app designed to keep you inspired. This app stores and creates quotations. Inversely, if you want a quote based on your mood, you can select a mood and the app will randomly populate one for you',
     myAppFlower : 'theone'
    }, 
    {name : 'My 1st Capstone',
     URL : '/awesomesauce', 
     screenshot : '/images/',
     description : 'what you said',
     myAppFlower : 'where that other flower will go'
    },
	];
}]);

controllers.controller('ResumeController', ['$scope', function($scope){
	$scope.message = "Rainu Ittycheriah | Web Developer";
}]);