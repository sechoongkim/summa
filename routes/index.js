// Home route
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

module.exports = app;