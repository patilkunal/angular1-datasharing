//second param of dependencies is required
var myApp = angular.module("myApp", []);

var mycontrollers = {};

myApp.controller(mycontrollers);

//inject Data service in controller and bind to data prop
mycontrollers.FirstCtrl = function ($scope, Data) {
    $scope.data = Data;
}

mycontrollers.SecondController = function($scope, Data) {
    $scope.data = Data;
}

//Controller to controller data sharing is implemented by having this factory

myApp.factory('Data', function() {
    return {message: 'This is from factory'};
});