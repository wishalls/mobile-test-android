var bodyParser = require('body-parser');
var express = require('express');
var request = require('request');
var http = require('http');
var fs = require('fs');
var sleep = require('system-sleep');

require('dotenv').config();


var app = express();
app.use(bodyParser.urlencoded({
	extended: false
}));

app.use("/public", express.static(__dirname + "/public"));
// parse application/json
app.use(bodyParser.json());
app.get('/', function (req, res) {
	res.sendFile('/order.html', {
		root: __dirname
	});
	//res.sendFile(__dirname + '/order.html');
});

app.post('/create', function (req, res) {
	if (!req.body) {
		console.log('No Body\n');
		res.send(' Theres is no body');
	} else {

		console.log(' Received [' + req.method + ']:[' + JSON.stringify(req.body) + ']\n');
		sleep(5000);


	}
})


app.get('/redirectBP', function (request, response) {
	response.redirect(bp_URL);
	//https://bsspserver04.finfort.ind.in:8443/BorrowerPortal/login/KMBL
	//https://borrowerportal.finfort.ind.in:8443/BorrowerPortal/login/KMBL
});

app.post('/get', function (req, res) {
	if (!req.body) {
		console.log('No Body\n');
		res.send(' Theres is no body');
	} else {

		console.log(' Received [' + req.method + ']:[' + JSON.stringify(req.body) + ']\n');
		sleep(5000);
		Auth.FuncSt();
		sleep(8000);
		var orderrecived = req.body;

	}
})

const PORT = 3000;
app.listen(PORT, function () {
	console.log('KMBL OCS listening on port' + PORT);
});