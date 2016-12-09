// call the needed packages
var express = require('express');        // call express
var app = express();	//define App using express

var db  = require('./app/model/db'); //define db
var indexService = require('./app/indexService')(); //define service

var port = 8080;  // set port

// ROUTES FOR OUR API
// ===============================================================================
var router = express.Router();

//on foutes /index
// ===============================================================================
router.route('/index')
	//Update data from http://www.nasdaq.com/ and store in the db
	.post(function(req, res) {
		indexService.scrapeIndexValue(db, function (result) {
			res.json({message: result})
		});
	})
	//get index value of the Nasdaq
	.get(function(req, res) {
		indexService.getIndexValue(db, function (result) {
			res.json(result);
		});
	})

// Defult testing route (accessed by GET http://localhost:8080/)
app.get('/', function(req, res) {
	res.json({ message: 'Welcome' });
	console.log('Welcome');	
});

// REGISTER ROUTES
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// ===============================================================================
app.listen(port);
console.log('Start on port ' + port);