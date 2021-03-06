'use-strict';

/**
 * Module dependencies.
 */
const express = require('express'),
    fs = require('fs'),
    http = require('http');
 	bodyParser = require('body-parser'),
 	morgan = require('morgan'),
 	path = require('path'),
 	cookieParser = require('cookie-parser'),
    session = require('express-session'),
    MongoStore = require('connect-mongo')(session),
    passport = require('passport'),

    config = require('./config'); // jshint ignore:line

// instantiate app and set core parameters
module.exports = function() {
    var app = express();   

    // server-client body parsing
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(morgan('dev'));
    app.use(cookieParser());

    // serve static files
    let browserPath = './browser';
    app.use(express.static(browserPath));

    // Set view engine (if we want to use a templating engine in the future)
    // app.engine('html', require('ejs').renderFile);
    // app.set('view engine', 'html');

    // create new MongoDB collection
    let sesh = session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret,
        store : new MongoStore({
          url: config.db,
          collection: config.sessionCollection,
        })
    });
    app.use(sesh);

    // use passport session
    app.use(passport.initialize());
    app.use(passport.session());

    // register all models
    var models_path = path.dirname(require.main.filename) + '/app/models';
    fs.readdirSync(models_path).forEach(function(file) {
        if (~file.indexOf('.js')) require(models_path + '/' + file);
    });

    // set up routing middleware
    require('../app/routes/index')(app);

    // pass passport for configuration
    require('./passport')(passport);

    /********************************* 
        ERROR HANDLING MIDDLEWARE
    **********************************/
    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    if (process.env.NODE_ENV == 'development') {
        // show stacktrace to user
        app.use(function(err, req, res, next) {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: err
            });
        });
        var server = http.createServer(app);
        app.set('server', server);

    } else {
        // production error handler; no stacktraces leaked to user
        app.use(function(err, req, res, next) {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: {}
            });
        });
    }

    return app;
};


