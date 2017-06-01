const express = require("express");
const app = express(); 
const path = require("path");
const models = require('./server/db');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const rp = require('request-promise')
var router = require('express').Router();

// var moment = require("moment");



// const ajax = require('ajax')

const $ = require('jquery');
const _ = require("lodash");

const request = require('request');



app.get('/matches', function (req, res, next) {

		var options = {
	    	uri: 'http://api.football-data.org/v1/competitions/398/leagueTable',
	    	qs: {
	    },
	    headers: {
	        'X-Auth-Token': '17d847c369414e6fa27e53d04edccd4c'
	    },
	    json: true // Automatically parses the JSON string in the response 
	};
	 
	rp(options)
	    .then(function (matches) {
	    	console.log(matches)
	    	res.send(matches);
	    })
	    .catch(function (err) {
	        console.log(err);
	    });

})
	

app.use(bodyParser.urlencoded()); //needed so that frontend can send stuff to backend
app.use(bodyParser.json());//needed so that frontend can send stuff to backend 

app.use(express.static(__dirname + "/public"));



app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// var npmPath = path.join(__dirname, '../node_modules');
// var publicPath = path.join(__dirname, '../public');
var browserPath = path.join(__dirname, './browser');

// app.use(express.static(npmPath));
// app.use(express.static(publicPath));
app.use(express.static(browserPath));

app.get("/", (req, res) => res.sendFile(path.join(__dirname+"/browser/index.html"))); 


app.get("/stuff",(req,res,next) => {
	models.User.findAll({})
	.then(elements => res.send(elements))
	.catch(next);
})

app.post('/users', (req,res,next) =>{
  models.User.create(req.body)
  .then(user => res.status(201).json(user))
  .catch(next);
});



// models.User.sync().then(() => {app.listen(3002, () => console.log("Server is listening!"))}).catch((err) => console.error(err));

models.User.sync()
	.then(() => {
		app.listen(3002, () => {
			console.log("Server is listening!");
		});
	}).catch(err => {
		console.error(err)
	});