// define myApp
var myApp = angular.module('myApp', []);

// create factory in myApp application
myApp.factory('Data', function(){
	return {message:"I'm data from a service"}
})

myApp.filter('reverse', function(){
	return.function(text){
		return text.split("").reverse().join("");
	}
})

//inject parameter Data from myApp.factory
function FirstCtrl($scope, Data){
	$scope.data = Data;
}

// create filter function
myApp.filter('reverse', function(Data){
	return function(text){
		return text.split("").reverse().join("") + " " + Data.message;
	}
})