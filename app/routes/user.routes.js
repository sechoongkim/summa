'use-strict';

module.exports = function(app) {
	var core = require('../controllers/users.controller');

	app.get('/', function(req, res) {
		res.sendFile('/index.html');
	});

	// account flow
	app.route('/auth/signup').post(core.signup);
	app.route('/auth/signin').post(core.signin);
	app.route('/auth/signout').get(core.signout);
};