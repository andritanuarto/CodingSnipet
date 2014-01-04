var app = angular.module("twitterApp", []);
//create controller inside AppCtrl scope
app.controller("AppCtrl", function ($scope){
	$scope.loadMoreTweets = function (){
		alert("loading tweets!");
	}

	$scope.deleteTweets = function(){
		alert("deleting tweets");
	}
});

//create directive enter
app.directive("enter", function(){

	return function(scope, element, attrs){
		element.bind("mouseenter", function(){
			scope.$apply(attrs.enter)
		});
	}
});
