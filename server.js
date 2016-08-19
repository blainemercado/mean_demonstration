var express = require('express'),
	app = express(),
	path = require('path'),
	bodyParser = require('body-parser'),
	session = require('express-session');

app.use(session({
	secret: 'somesecrettokenhere',
	resave: false,
	saveUninitialized: true,
	maxAge: 5000000
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, 'bower_components')));

require(path.join(__dirname, 'server', 'config', 'mongoose.js'));
require(path.join(__dirname, 'server', 'config', 'routes.js'))(app);

app.listen(8000, function(){
	console.log('listening on port 8000');
})