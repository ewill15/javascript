'use strict';

/* Controllers */

var carAppControllers = angular.module('carAppControllers', []);

//Inyectamos el servicio Car creaado en services JS, que nos permite extraer los vehiculos del proyecto
carAppControllers.controller('CarListCtrl', ['$scope', 'Car',
	function ($scope, Car) {
		/*Extraemos nuestros vehiculos desde cars.json*/
			$scope.cars = Car.query;
			$scope.orderProp = 'model';

	}]);

carAppControllers.controller('CarDetailCtrl', ['$scope', '$routeParams', 'Car',
	function ($scope, $routeParams, Car) {
		$scope.car = Car.get({carId:$routeParams.carId},function(){
			$scope.mainImageUrl = car.images[0];
		});
		$scope.setImages = function(imageUrl){
			$scope.mainImageUrl = imageUrl;
		}
	}]);
