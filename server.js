// call the needed packages
var express = require('express');        // call express
var app = express();	//define App using express

var db  = require('./app/model/db'); //define db

var port = 8080;  // set port

// ROUTES FOR OUR API
// ===============================================================================
var router = express.Router();



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