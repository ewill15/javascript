'use strict';

var carAppControllers = angular.module('carAppControllers',[]);

carAppControllers.controller('carListCtrl', ['$scope', 'Car',
    function($scope,Car){
        $scope.cars = Car.getCars();
    }
]);