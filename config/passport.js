'use-strict';

var User = require('mongoose').model('User'),
	config = require('./config'),
	LocalStategy = require('passport-local').Strategy;

module.exports = function(passport) {
	// Serialize sessions
	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});

	// Deserialize sessions
	passport.deserializeUser(function(id, done) {
	    User.findById(id, function(err, user) {
	        done(err, user);
	    });
	});
	
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
			console.log(user);
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