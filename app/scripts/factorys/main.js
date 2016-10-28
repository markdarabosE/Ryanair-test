'use strict';

/**
 * @ngdoc function
 * @name ryanairApp.factorys:States
 * @description
 * # States factory
 */

// define factory for data source
app.factory("States", function($http){
    var states = [];
    $http.get('https://murmuring-ocean-10826.herokuapp.com/en/api/2/forms/flight-booking-selector/')
        .then(function(re) {
            var data = re.data.airports;
            for(var i = 0; i < Object.keys(data).length; i++) {
                states.push(data[i]);
            }
        });

    return states; 
});