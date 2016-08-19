var mongoose = require('mongoose');
var questionSchema = new mongoose.Schema({
	question : {type : String, required : true, minlength : 10},
	description : {type : String},
	_user : {type : mongoose.Schema.Types.ObjectId, ref : 'users'},
	_answers : [{type : mongoose.Schema.Types.ObjectId, ref : 'answers'}]
}, {timestamps : true});

mongoose.model('questions', questionSchema);