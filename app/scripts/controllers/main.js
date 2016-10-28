'use strict';

/**
 * @ngdoc function
 * @name ryanairApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ryanairApp
 */

app.controller('mainCtrl', ["$scope", "$http", "States", "$filter", function($scope, $http, States, $filter) {
    $scope.startDate = "2015-04-04";
    $scope.endDate = "2016-11-30";
    $scope.origin;
	$scope.destination;
	$scope.states = States;
    $scope.nowDate = new Date();
    var formatedStartDate, formatedEndDate, originIataCode, destinationIataCode;

    $scope.submit = function() {
        (function () {
            for(var i = 0; i < Object.keys($scope.states).length; i++){
                if($scope.states[i].name === $scope.origin) {
                    originIataCode = $scope.states[i].iataCode;
                }
                if($scope.states[i].name === $scope.destination) {
                    destinationIataCode = $scope.states[i].iataCode;
                }
            }
        })();

        formatedStartDate = $filter('date')($scope.startDate, "yyyy-MM-dd");
        formatedEndDate = $filter('date')($scope.endDate, "yyyy-MM-dd");
        $http.get('https://murmuring-ocean-10826.herokuapp.com/en/api/2/flights/from/'+originIataCode+'/to/'+destinationIataCode+'/'+formatedStartDate+'/'+formatedEndDate+'/250/unique/?limit=15&offset-0')
            .then(function(re) {
                $scope.flightsData = re.data;
            });
    };
}]);