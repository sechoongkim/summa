'use-strict';

module.exports = function(app) {
	var core = require('../controllers/users.controller');

	// account flow
	app.route('/auth/signup').post(core.signup);
	app.route('/auth/signin').post(core.signin);
	app.route('/auth/signout').get(core.signout);
};