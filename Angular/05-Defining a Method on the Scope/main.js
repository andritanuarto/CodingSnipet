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

	$scope.reversedMessage = function(){
		//did the function by injecting the $scope
		return $scope.data.message.split("").reverse().join("");
	}
}

function ThirdCtrl($scope, Data){
	$scope.data = Data;

	$scope.reversedMessage = function(message){
		//return the function
		return message.split("").reverse().join("");
	}
}