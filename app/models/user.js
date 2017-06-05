'use-strict';

/**
 * Module Dependencies
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	crypto = require('crypto'),
	config = require('../../config/config'),
	request = require('request');

/**
 * A Validation function for local strategy properties
 */
var validateLocalStrategyProperty = function(property) {
	return ((this.provider !== 'local' && !this.updated) || property.length);
};

/**
 * A Validation function for local strategy password
 */
var validateLocalStrategyPassword = function(password) {
	return (this.provider !== 'local' || (password && password.length >= 8));
};

/**
 * User Schema
 */

var options = {
	timestamps: true,
	minimize: false
};

var UserSchema = new Schema({

	firstName	: {
		type	: String,
		trim	: true,
		default : '',
		validate: [validateLocalStrategyProperty, 'Please enter your first name']
	},
	lastName	: {
		type	: String,
		default : '',
		validate: [validateLocalStrategyProperty, 'Please enter your last name']
	},
	displayName : {
		type	: String,
		trim	: true
	},
	email		: {
		type	: String,
		lowercase: true,
		trim	: true,
		unique 	: true,
		validate: [validateLocalStrategyProperty, 'Please fill in your email'],
		match   : [/.+\@.+\..+/, 'Please fill a valid email address']
	},
	username	: {
		type	: String,
		lowercase: true,
		unique	: true,
		required : 'Please enter a username',
		trim	: true
	} ,
	password 	: {
		type	: String,
		default	: '',
		validate: [validateLocalStrategyPassword, 'Password must be longer than 8 characters']
	},
	roles               : {
		type              : [{
			type            : String,
			enum            : ['user', 'admin']
		}],
		default           : ['user']
	},
	/* For reset password */
	resetPasswordToken  : {
		type              : String
	},
	resetPasswordExpires: {
		type              : Date
	}


}, options);

module.exports = mongoose.model('User', UserSchema);

