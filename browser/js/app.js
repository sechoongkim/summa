'use-strict';

var app = angular.module('TestieApp', ['ui.router', 'ngRoute'])
app.preventDefault()
	app.run(function($state, $rootScope) {
		alert("Running!");
	    $state.go('home'); 
	});

