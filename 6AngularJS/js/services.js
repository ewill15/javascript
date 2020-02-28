'use strict';

var carAppServices = angular.module('carAppServices',[]);

carAppServices.factory('Car', [
    function(){
        return {
            notify: function(msg){
                alert(msg);
            },
            getCars: function(){
                var cars = [{
                    "name":"NEW QASHQAI",
                    "snippet": "MADE WITH TOU IN MIND TO GIVE YOU THE HIGHEST QUALITY"
                },
                {
                    "name": "Veloster",
                    "snippet":"SPORTY LIKE A COUPE. ROOMY LIKE A SEDAN"
                },
                {
                    "name":"Navara",
                    "snippet":"THE NAVARA IS ALL LABOUT FREEDOM INCLUDING FREEDOM OF CHOICE"
                }];
            }
        }
    }
])