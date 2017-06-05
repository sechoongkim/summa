'use-strict';

var app = angular.module('TestieApp', ['fsaPreBuilt','ui.router', 'ngRoute'])
	.run(function($state, $rootScope) {
		$state.go('home');  
	});

