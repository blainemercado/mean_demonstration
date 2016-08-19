var mongoose = require('mongoose');
var Question = mongoose.model('questions');
var User = mongoose.model('users');

var Answer = mongoose.model('answers');
module.exports = {
	index : function(req, res){
		Answer.find(function(err, answers){
			if(err){
				return res.send(err);
			} else {
				res.send(answers);
			}
		});
	},
	create : function(req, res){
		Answer.create({
				answer : req.body.answer, 
				support : req.body.support, 
				_user : req.session.userId,
				_question : req.body.question_id
			}, function(err, answer){
				if(err){
					res.send('unable to create answer');
				} else {
					Question.update({_id : req.body.question_id}, {$push : {_answers : answer}}, function(err, confirm){
						if(err){
							res.send('did not push answer');
						} else {
							User.update({_id : req.session.userId}, {$push : {_answers : answer}}, function(err, confirm){
								if(err){
									res.send('did not push answer into User');
								} else {
									res.send(answer);
								}
							})
						}
					})
				}
			})
	},
	questionAnswers : function(req, res){
		console.log(req.params._id);
		Answer
			.find({_question : req.params._id})
			.populate('_user')
			.sort({likes : -1})
			.exec(function(err, allA){
			if(err){
				res.send(err);
			} else {
				res.json(allA);
			}
		})
	},
	like : function(req, res){
		Answer.update({_id : req.params._id}, {$inc : {likes : 1}}, function(err, confirm){
			if(err){
				res.send('unable to increment upvote');
			} else {
				res.send({success : true});
			}
		})
	},
	delete : function(req, res){
		Answer.remove({_id : req.params._id}, function(err){
	    	if(err){
	    		res.send('unable to delete');
	    	} else {
	    		res.send({success : true});
	    	}
    	})
	}
}