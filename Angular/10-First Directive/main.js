var app = angular.module("superhero", []);

app.directive("superman", function(){
	return{
		//E only matches element name
		//A only matches attribute name
		//AE matches either attribute or element name
		restrict: "E", 
		template:"<div>Here I am to save the day</div>"
	}
})