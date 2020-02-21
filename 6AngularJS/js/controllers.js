'use strict';

var carAppControllers = angular.module('carAppControllers',[]);

carAppControllers.controller('carListCtrl', ['$scope',
    function($scope,Car){
        $scope.cars = [{
            "name": "New QASHQAI",
            "snippet": "MADE WITH YOU IN MIND TO GIVE YOU THE HIGHEST QUALITY"
        },
        {
            "name": "Veloster",
            "snippet": "SPORTY LIKE A COUPE. ROOMY LIKE A SEDAN"
        },
        {
            "name": "Navara",
            "snippet": "THE NAVARA IS ALL ABOUT FREEDOM INCLUDING FREEDOM OF CHOISE"
        }];
    }
]);