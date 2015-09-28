var express = require('express'),
	app = express(),
	config = require('./config.js'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI);

//Allow Express to show static files in the /public folder
app.use(express.static(__dirname + '/public'));
//Allow parsing of application/json
app.use(bodyParser.json());
//Allow parsing of x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

var apiRouter = require('./app/routes/api.js')(app, express);
app.use('/api', apiRouter);

//All requests is directed to index.html
//Frontend routing will be taken care of by Angular
app.get('*', function (req, res) {
	res.sendFile(__dirname + '/public/views/index.html');
});

app.listen(config.port);