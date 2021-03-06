'use strict';

/* Controllers */

var carAppControllers = angular.module('carAppControllers', []);

//Inyectamos el servicio Car creaado en services JS, que nos permite extraer los vehiculos del proyecto
carAppControllers.controller('CarListCtrl', ['$scope', 'Car', '$http',
	function ($scope, Car, $http) {
		/*Extraemos nuestros vehiculos desde cars.json*/
		$http.get('js/cars/cars.json').success(function (data) {
			$scope.cars = data;
		});

	}]);

carAppControllers.controller('CarDetailCtrl', ['$scope', '$routeParams',
	function ($scope, $routeParams) {
		$scope.carId = $routParams.carId;
	}]);
