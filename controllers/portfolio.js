angular.module('portfolio')
.controller('IndexCtrl',function($scope,$http,$rootScope,$q){
		$rootScope.cargador=true;
	var data = new FormData();
				data.append("acc","l");

			var deferred=$q.defer();
			
			$http.post("index.html", data,{
				headers:{
					"Content-type":undefined
				},
					transformRequest:angular.identity
			})
			.then(function(res){
				deferred.resolve(res);
				$rootScope.cargador=false;
			})
			.catch(function(error) {
				$rootScope.cargador=false;
			});

})
.controller('inicioCtrl',function($scope,$http,$rootScope,$q){
		$rootScope.cargador=true;
	var data = new FormData();
				data.append("acc","l");

			var deferred=$q.defer();
			
			$http.post("views/inicio.html", data,{
				headers:{
					"Content-type":undefined
				},
					transformRequest:angular.identity
			})
			.then(function(res){
				deferred.resolve(res);
				$rootScope.cargador=false;
			})
			.catch(function(error) {
				$rootScope.cargador=false;
			});

})

.controller('portfolioCtrl',function($scope,$http,$rootScope,$q){
		$rootScope.cargador=true;
	var data = new FormData();
				data.append("acc","l");

			var deferred=$q.defer();
			
			$http.post("views/portfolio.html", data,{
				headers:{
					"Content-type":undefined
				},
					transformRequest:angular.identity
			})
			.then(function(res){
				deferred.resolve(res);
					$rootScope.cargador=false;
			})
			.catch(function(error) {
				$rootScope.cargador=false;

			});

})
