const express = require('express'),
	app = express(),
 	bodyParser = require('body-parser'),
 	morgan = require('morgan'),
 	path = require('path'),
 	cookieParser = require('cookie-parser');

let routes = require('./routes/index');

// body parsing btwn server-client
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cookieParser());

// serve static files
var browserPath = path.join(__dirname, './browser');
app.use(express.static(browserPath));

app.listen(3000, function() {
  console.log('listening on 3000');
});


/********************************* 
	ERROR HANDLING MIDDLEWARE
**********************************/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;