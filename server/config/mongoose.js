var mongoose = require('mongoose');
var path = require('path');
var fs = require('fs');

mongoose.connect('mongodb://localhost/mean_demonstration', function(err){
	console.log('connected to mongoose');
})

var models_path = path.join(__dirname, '../models');

fs.readdirSync(models_path).forEach(function(file){
	console.log(file);
	require(models_path + '/' + file);
})