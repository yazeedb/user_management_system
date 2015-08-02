var express = require('express'),
	app = express(),
	config = require('./config.js'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose');

mongoose.connect(config.database);

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('*', function (req, res) {
	res.sendFile(__dirname + '/public/views/index.html');
});

app.listen(config.port);