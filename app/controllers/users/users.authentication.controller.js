/**
 * Module dependencies.
 */
var _ = require('lodash'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	passport = require('passport'),
	request = require('request'),
	config = require('../../../config/config');

function findError(user) {
	return User.findOne({email: user.email})
			.then((entry) => {
				if (entry) return "Email is already in use.";
				else return User.findOne({username: user.username});
			}).then((res) => {
				if (res == "Email is already in use.") return entry;
				else if (res) return "Username is already in use.";
				else return "Something went wrong. Please try again.";
			});
}

/**
 * Signup
 */
 exports.signup = function(req, res) {
 	// for now, delete the roles field until we create admin privileges
 	delete req.body.roles;

 	// create a new instance of the user
 	var user = new User(req.body);
 	var message = null;
 	// fill in missing fields
 	user.provider = 'local';
 	user.displayName = user.firstName + ' ' + user.lastName;

 	var errMssg;
 	// save the new user to the database
 	user.save(function(err) {
 		if (err) {
 			if(err.name == "ValidationError"){
 				res.status(400).send({
 				message: "Passowrd to short"
 				});
 			}
 			else{
	 			User.findOne({email: user.email}, function(err, entry) {
	 				if (entry) errMssg = "Email is already in use";
	 				else errMssg = "Username is already in use";
	 				res.status(400).send({
	 					message: errMssg
	 				});
	 			});
 			}
 		} else {
 			// remove sensitive info before login for security measures
 			user.password = undefined;
 			console.log(user.username + " has signed up!");
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
	console.log("REQ",req.body);
	passport.authenticate('local', function(err, user, info) {

		if (err || !user) {
			console.log("YOU DONE FUCKED UP", info);
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
