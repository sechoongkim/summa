'use-strict';
/**
 * Module dependencies.
 */
var init = require('./config/init')(),
	config = require('./config/config'),
	mongoose = require('mongoose'),
	chalk  = require('chalk'),
	app = require('./config/express')();

mongoose.Promise = global.Promise;

connect()
	.on('error', console.error)
	.on('disconnected', connect)
	.once('open', listen);

function listen() {
	app.get('server').listen(config.port);

	// expose app
	module.exports = app;

	console.log("MEAN.JS application started on port " + config.port);
}

// connect to mongoDB
function connect() {
	var params = { server: { socketOptions: { keepAlive: 1 } } };
	return mongoose.connect(config.db, params).connection;
}

