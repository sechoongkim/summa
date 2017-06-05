/**
 * Module dependencies.
 */
var _ = require('lodash'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	passport = require('passport'),
	request = require('request'),
	config = require('../../../config/config');

/**
 * Signup
 */
 exports.signup = function(req, res) {
 	// for now, delete the roles field until we create admin privileges
 	delete req.body.roles;

 	// create a new instance of the user
 	var user = new User(req.body);
 	var message = null;

 	console.log(user.username + " has signed up!");

 	// fill in missing fields
 	user.provider = 'local';
 	user.displayName = user.firstName + ' ' + user.lastName;

 	// save the new user to the database
 	user.save(function(err) {
 		if (err) {
 			return res.status(400).send({
 				// TODO: change so that this is handled by an error handling module
 				message: "Error creating user!"
 			});
 		} else {
 			// remove sensitive info before login for security measures
 			user.password = undefined;

 			req.login(user, function(err) {
 				if (err) {
 					res.status(400).send(err);
 				} else {
 					res.json(user);
 				}
 			});
 		}
 	});
 };

/**
 * Signin after passport authentication
 */
exports.signin = function(req, res, next) {
	passport.authenticate('local', function(err, user, info) {
		if (err || !user) {
			res.status(400).send(info);
		} else {
 			// remove sensitive info before login for security measures
			user.password = undefined;

			req.login(user, function(err) {
				if (err) {
					res.status(400).send(err);
				} else {
					res.json(user);
				}
			});
		}
	})(req, res, next);
};

/**
 * Signout
 */
 exports.signout = function(req, res) {
 	req.logout();
 	res.redirect('/');
 };
