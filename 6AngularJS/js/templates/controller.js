'use strinct';

var carListApp = angular.module('carListAppController', []);

carListApp.controller('ListController', function($scope){
    $scope.appTitle = 'CarList App 2014';
    $scope.formHeader = 'Agregar un carro a tu increible lista';
    $scope.deleteCarText = 'Eliminar';
    $scope.addText = 'Agregar';
    $scope.formTextBrand = 'Marca';
    $scope.formTextYear = 'Año';

    $scope.brand;
    $scope.year;

    $scope.cars = [{
        brand:'BMW M4 Coupe',
        year: '2014'
    },{
        brand:'Chevrolet Convert Stinggray',
        year:'2013'
    },
    {
        brand:'Ford Mustang',
        year:'2015'
    },
    {
        brand:'Mclaren F1',
        year:'2010'
    },
    {
        brand:'Chevrolet Camaro SS',
        year:'2011'
    },
    {
        brand:'Chevrolet Corvertte Z006',
        year:'2013'
    },
    {
        brand:'Ferrari California',
        year:'2008'
    }];

    $scope.addCar = function(){
        var car = {
            brand: $scope.brand,
            year: $scope.year
        };
        $scope.cars.push(car);
    }

    $scope.deleteCar = function(id){
        $scope.cars.splice(id,1);
    }
})