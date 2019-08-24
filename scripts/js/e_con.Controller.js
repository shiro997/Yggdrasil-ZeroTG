(function(){
	var app = angular.module('ZeroTgWeb');
	app.controller('MainController', ['$scope','$stateProvider', function($scope,$stateProvider){
        $stateProvider
            .when('/',{template:'../Git-ZeroTG/Yggdrasil-ZeroTG/index.html'})
            .when('/YugiohDL',{template:'../Git-ZeroTG/Yggdrasil-ZeroTG/YugiohDL.html'})
            .when('/Brawl',{template:''})
            .otherwise({redirectTo:'/'});
		
	}])
})();