// define myApp
var myApp = angular.module('myApp', []);

// create factore in myApp application
myApp.factory('Data', function(){
	return {message:"I'm data from a service"}
})

//inject parameter Data from myApp.factory
function FirstCtrl($scope, Data){
	$scope.data = Data;
}

function SecondCtrl($scope, Data){
	$scope.data = Data;
}