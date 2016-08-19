var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
	name : {type : String, unique : true, required : true },
	_questions : [{type : mongoose.Schema.Types.ObjectId, ref : 'questions'}],
	_answers : [{type : mongoose.Schema.Types.ObjectId, ref : 'answers'}]
}, {timestamps : true});

mongoose.model('users', userSchema);