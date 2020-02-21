'use strict';

var realTempApp = angular.module('realTempAppServices', []);

realTempApp.factory('Temp', function(){
    return {
        celciusToFahrenheit: function(temp){
            var tempInFarenheit = 0.0;
            var tempInCelcius = temp;

            tempInFarenheit = tempInCelcius * 9/5 + 32;
            return tempInFarenheit;
        
        },
        celciusToKelvin: function(temp){
            var tempInKelvin = 0.0;
            var tempInCelcius = temp;

            tempInKelvin = tempInCelcius -273.15;
            return tempInKelvin;
        }
    }
});