var myApp = angular.module('myApp', []);

myApp.factory('Avengers', function(){
	var Avengers = {};
	Avengers.cast =[
		{
			name: "Samuel L. Jackson",
			character: "Nick Fury"
		},
		{
			name: "Gweynth Paltrow",
			character: "Pepper Potts"
		},
		{
			name: "Paul Bettany",
			character: "Jarvis (voice)"
		},
		{
			name: "Alexis Denisof",
			character: "The Other"
		},
		{
			name: "Tina Benko",
			character: "NASA Scientist"
		}
	];
	return Avengers;
})

function AvengersCtrl($scope, Avengers){
		$scope.avengers = Avengers;
}