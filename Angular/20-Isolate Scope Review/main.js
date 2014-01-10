var app = angular.module("phoneApp", []);

app.controller("AppCtrl", function($scope) {
    $scope.leaveVoicemail = function(number, message) {
        alert("Number: " + number + " said: " + message)
    }
})

app.directive("phone", function() {
    return {
        restrict: "E", // restrict by tag name
        scope: {
            number: "@", //to pass parameter
            network: "=", //binding
            makeCall: "&", //create function make call
        },
        template: '<div class="panel">Number: {{number}} Network:<select ng-model="network" ng-options="net for net in networks">' +
          '<input type="text" ng-model="value">' +
          '<div class="button" ng-click="makeCall({number: number, message: value})">Call home!</div></div>',

        // this is model
        link: function(scope) {
            scope.networks = ["Verizon", "AT&T", "Sprint"];
            scope.network = scope.networks[0]
        }
    }
})