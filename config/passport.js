'use-strict';

var User = require('mongoose').model('User'),
	config = require('./config'),
	LocalStategy = require('passport-local').Strategy;

module.exports = function(passport) {
	passport.use(new LocalStategy({
		usernameField: 'username',
		passwordField: 'password'
	},
	function(username, password, done) {
		User.findOne({
			username: username
		}, function(err, user) {
			if (err) {	
				console.error(err);
			}
			if (!user) {
				return done(null, false, {
					message: 'Unknown user or invalid password'
				});
			}
			if (!user.authenticate(password)) {
				return done(null, false, {
					message: 'Unknown user or invalid password'
				});
			}
			return done(null, user);
		});
	}
	));
};