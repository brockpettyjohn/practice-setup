angular.module('app') 
.controller('controller', function($scope, service){
    $scope.scopeTest=service.serviceTest
   
})