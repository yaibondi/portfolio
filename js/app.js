var app=angular.module('portfolio',['ngRoute']);
app.run(['$rootScope',function($rootScope) {
  $rootScope.cargador=false;
  $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
  });
}]);
app.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl:'views/inicio.html',
		controller:'inicioCtrl',
		title: "Inicio"
	})
	.when('/portfolio',{
		templateUrl:'views/portfolio.html',
		controller:'portfolioCtrl',
		title: "Portfolio"
	})
	.otherwise({
		redirectTo:'/'
	});
}]);	