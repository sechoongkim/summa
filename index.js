var express = require("express");
var app = express(); 
var path = require("path");
var moment = require("moment");
var $ = require('jquery');
var jsdom = require("jsdom");
var window = jsdom.jsdom().defaultView;

jsdom.jQueryify(window, "http://code.jquery.com/jquery.js", function () {
  var $ = window.$;

  });

const CHART = $("#myChart");

let myChart = new Chart(CHART, {
	    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});


app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
	res.sendFile(path.join(__dirname+"/index.html")); 
})

app.listen(3002);

