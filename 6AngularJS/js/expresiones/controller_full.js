'use strict';

var smartExpressionApp = angular.module('oneTimeAppController',[]);

smartExpressionApp.controller('SingleBindController', function($scope){
    var counter = 0;

    $scope.names = [
        {
            name: "Dana"
        },
        {
            name: "Wolfram"
        },
        {
            name: "Miguel"
        },
        {
            name: "Lucho"
        }
    ];

    $scope.nextName = function(clickEvent){
        $scope.name = $scope.names[counter % $scope.names.length].name;
        counter++;
    }
});