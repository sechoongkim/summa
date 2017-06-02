'use-strict';

module.exports = function(app) {
	// Home route
	console.log(__dirname);
	app.get('/', (req, res) => {
		res.sendFile('./broswer/index.html');
	});
};


