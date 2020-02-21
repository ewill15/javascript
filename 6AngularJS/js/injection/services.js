'use strict';

/* Services */
/* Se aplica el uso de servicios*/
var carAppServices = angular.module('carAppServices', []);

//Se declara el servicio Car! con una sola propiedad
carAppServices.factory('Car', [
  function(){
    return {
    	notify: function(msg){
    		alert(msg);
    	},
    	getCars: function(){
    		var cars = [{
						"id":"1",
						"name": "NEW QASHQAI", 
						"model":"2019",
				        "description": "MADE WITH YOU IN MIND TO GIVE YOU THE HIGHEST QUALITY"
				    },
				    {
						"id":"2",						
						"name": "Veloster", 
						"model":"2018",
				        "description": "SPORTY LIKE A COUPE. ROOMY LIKE A SEDAN."
				    },
				    {
						"id":"3",
						"name": "Navara", 
						"model":"2020",
				        "description": "The Navara is all about freedom including freedom of choice."
				    }];

		    return cars;
    	}
    }
  }]);
