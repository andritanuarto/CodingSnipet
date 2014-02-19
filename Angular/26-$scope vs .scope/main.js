var app = angular.module("app", []);
//order doesn't matter but name is matter
/*
app.controller("MyCtrl", function($scope, $http, $parse){
   console.log($parse);
});
*/

app.controller("MyCtrl", ['$scope', '$http', function(a, b){
    console.log(a)
    console.log(b);
}]);

app.directive("myDirective", function ($http, $parse){
    return {
        scope: {},
        //naming doesn't matter the matter is the order
        link: function(scope, element, attrs){ 
      //      console.log(element);
        }
    }
});