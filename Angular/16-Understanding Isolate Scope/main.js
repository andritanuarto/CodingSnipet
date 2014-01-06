var app = angular.module("choreApp", []);
/*
By adding an isolated scope object to your AngularJS directive you can insure 
that each element using that directive has its own scope. This prevents it from 
affecting sibling directives and encapsulates the directive.By adding an isolated 
scope object to your AngularJS directive you can insure that each element using 
that directive has its own scope. This prevents it from affecting sibling 
directives and encapsulates the directive.
*/

app.controller("ChoreCtrl", function($scope){
	$scope.logChore = function (chore){
		alert(chore + " is done!");
	}
})

app.directive("kid", function(){
	return {
		restrict: "E",
		scope:{
			done:"&"
		},
		template: '<input type="text" ng-model="chore">' + 
			'{{chore}}' +
			'<div class="button" ng-click="done({chore:chore})">I\'m done</div>'
	}
})