'use-strict';

var app = angular.module('BeetsApp', ['fsaPreBuilt','ui.router', 'ngRoute'])
	.run(function($state, $rootScope) {
	});

app.factory('moment', function ($window) {
        return $window.moment;
    });

var bootstrap_enabled = (typeof $().emulateTransitionEnd == 'function');
console.log(bootstrap_enabled)

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('somethinghere', {
        url: '/other',
        controller: 'HomeController',
        templateUrl: 'js/home/about.html'
    });
});