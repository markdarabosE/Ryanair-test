'use strict';

/**
 * @ngdoc function
 * @name ryanairApp.filters:rangeFilter
 * @description
 * # rangeFilter
 * Filter of the ryanairApp
 */


app.filter('rangeFilter', function() {
    return function(input, startDate, endDate) {
        var out = [];

        for (var i = 0; i < Object.keys(input).length; i++) {
            if (Date.parse(startDate) < Date.parse(input[i].dateFrom) && Date.parse(input[i].dateTo) < Date.parse(endDate)) {
                out.push(input[i]);
            }
        }
        return out;
    };
});