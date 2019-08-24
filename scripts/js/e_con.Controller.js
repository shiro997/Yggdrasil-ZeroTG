(function(){
	var app = angular.module.config("zeroTgWeb",['ngRoute',"$routeProvider"]);
	var MainController = function($scope,$routeProvider){
        $routeProvider
            .when('/',{template:"C:/Users/altptt/Desktop/Git-ZeroTG/Yggdrasil-ZeroTG/index.html"})
            .when('/YugiohDL',{template:"C:/Users/altptt/Desktop/Git-ZeroTG/Yggdrasil-ZeroTG/YugiohDL.html"})
            .when('/Brawl',{template:""})
            .otherwise({redirectTo:'/'});
	}
})();