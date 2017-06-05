'use-strict';

var app = angular.module('BeetsApp', ['fsaPreBuilt','ui.router', 'ngRoute'])
	.run(function($state, $rootScope) {
		$state.go('home');  
	});

