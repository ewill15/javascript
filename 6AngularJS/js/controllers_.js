'use strint'

var realTempApp = angular.module('realTempAppControllers',[]);

realTempApp.controller('TempController',function($scope,temp){
    $scope.tempInCelcius = 0.0;
    $scope.resultInFahreinheit = 0.0;
    $scope.resultInKelvins = 0.0;
    
    $scope.convertTemperatures = function(){
        $socpe.resultInFahreinheit = Temp.celciusToFahrenheit($scope.tempInCelcius);
        $scope.resultInKelvins = Temp.celciusToKelvin($scope.tempInCelcius);
    }
})