'use-strict';

var app = angular.module('TestieApp', ['ui.router', 'ngRoute'])
	.run(function($state, $rootScope) {
		alert("Running!");
	    $state.go('home'); 
	});
