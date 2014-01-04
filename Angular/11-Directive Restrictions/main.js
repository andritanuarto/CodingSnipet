var app = angular.module("superhero", []);

app.directive("superman", function(){
	return{
		//E only matches element name
		//A only matches attribute name
		//AE matches either attribute or element name
		restrict: "C", 
		link: function(){
			alert("I'm Working");
		}
	}
});

app.directive("flash", function(){
	return{
		//E only matches element name
		//A only matches attribute name
		//AE matches either attribute or element name
		restrict: "A", 
		link: function(){
			alert("I'm Working faster");
		}
	}
});