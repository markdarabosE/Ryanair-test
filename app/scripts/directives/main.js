'use strict';

/**
 * @ngdoc function
 * @name ryanairApp.directives:listDirective
 * @description
 * # listDirective
 */

app.directive('listDirective', function () {
	return {
		restrict: 'A',
		template: `
		<div class="content">
			<div class="content-title"><div class="col-md-6 col-sm-6 col-xs-6">From: {{ origin }}</div><div class="col-md-6 col-sm-6 col-xs-6">To: {{ destination }}</div></div>
			<div class="flight" ng-repeat="y in flightsData.flights | orderBy: ['price','-dateFrom'] | rangeFilter:startDate:endDate">
				<div class="col-md-6">{{y.dateFrom | date:'yyyy-MM-dd HH:mm'}}</div>
				<div class="col-md-6">{{y.dateTo | date:'yyyy-MM-dd HH:mm'}}<span class="price">{{y.price | number:2}} {{y.currency}}</span></div>
			</div>
		<div class="clear"></div>
		</div>`
	};
});
