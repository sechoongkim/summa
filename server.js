const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require("path");

// body Parsing btwn server-client
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// serve static files
var browserPath = path.join(__dirname, './browser');
app.use(express.static(browserPath));

app.listen(3000, function() {
  console.log('listening on 3000');
});


app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});