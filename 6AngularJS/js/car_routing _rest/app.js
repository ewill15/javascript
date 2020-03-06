'use strict';

/* App Module */
/* se crea el modulo del aplicativo*/
var carApp = angular.module('carApp', [
  'ngRoute',
  'carAppControllers',
  'carAppServices' // se agrega el servicio creado en services.js
]);

carApp.config(['routeProvider',
function($routProvider){
  $routeProvider.
  when('/cars',{
    templateUrl: 'partials/car_list.html',
    controller: 'CarDetailCtrl'
  }).
  when('/cars/:carId',{
    templateUrl: 'partials/car_detail.html',
    controller: 'CarDetailCtrl'
  })
  otherwise({
    redirectTo: '/cars',
  })
}])