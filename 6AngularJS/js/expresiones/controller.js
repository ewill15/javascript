'use strict';

var smartExpresionApp = angular.module('smartExpressionAppController', []);

smartExpresionApp.controller('EvalController', function($scope){
    $scope.expression = '';

    $scope.expressionns = [
        {
            value: '3*10|currency'
        },
        {
            value: '1234567892014 |date:"yyyy/MM/dd"'
        },
        {
            value: '8/2+5'
        },
        {
            value: '(8/2)*16+1'
        },
        {
            value: '12*2'
        },
        {
            value: '1+1+1+1+2*5+0'
        },
        {
            value: '2500*1000|currency'
        }
    ];

    $scope.evaluate = function(){
        var exp = {value:$scope.expression};

        $scope.expressions.push(exp);

        $scope.expression = '';
    };

    $scope.deleteExp = function(idx){
        $scope.expression.splice(idx,1)
    }
});