'use-strict';

var app = angular.module('BeetsApp', ['fsaPreBuilt','ui.router', 'ngRoute'])
	.run(function($state, $rootScope) {
	});

app.factory('moment', function ($window) {
        return $window.moment;
    });

var bootstrap_enabled = (typeof $().emulateTransitionEnd == 'function');

app.config(function ($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.when('','home');

});