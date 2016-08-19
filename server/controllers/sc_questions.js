var mongoose = require('mongoose');
var User = mongoose.model('users');

var Question = mongoose.model('questions');
module.exports = {
	index : function(req, res){
		Question.find(function(err, questions){
			if(err){
				return res.send(err);
			} else {
				res.send(questions);
			}
		});
	},

	show : function(req, res){
		Question
			.findOne({_id : req.params._id})
			.populate('_answers')
			.exec(function(err, oneQ){
			if(err){
				res.send(err);
			} else {
				res.json(oneQ);
			}
		})
	},
	create : function(req, res){
		Question.create({
				question : req.body.question, 
				description : req.body.description, 
				_user : req.session.userId,
			}, function(err, question){
				if(err){
					res.send('unable to create question');
				} else {
					User.update({_id : req.session.userId}, {$push : {_questions : question}}, function(err, confirm){
						if(err){
							res.send('did not push answer into User');
						} else {
							res.send(question);
						}
					})
				}
		})
	},
	delete : function(req, res){
		Question.remove({_id : req.params._id}, function(err){
	    	if(err){
	    		res.send('unable to delete');
	    	} else {
	    		res.send({success : true});
	    	}
    	})
	}
}