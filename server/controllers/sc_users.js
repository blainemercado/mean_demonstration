var mongoose = require('mongoose');

var User = mongoose.model('users');
module.exports = {
	index : function(req, res){
		User.find(function(err, users){
			if(err){
				return res.send(err);
			} else {
				res.send(users);
			}
		});
	},
	show : function(req, res){
		User
			.findOne({_id : req.params._id})
			.populate('_questions')
			.exec(function(err, oneUser){
			if(err){
				console.log(err);
			} else {
				res.json(oneUser);
			}
		})
	},
	login : function(req, res){
		if(!req.body.name) {
			res.send("req.body.name doesn't exist");
		} else {
			User.create({name : req.body.name}, function(err, user){
				if(err){
					User.findOne({name : req.body.name}, function(err, existingUser){
						req.session.userId = existingUser._id;
						req.session.name = existingUser.name;
						res.json(existingUser);
					})
				} else {
					req.session.userId = user._id;
					req.session.name = user.name;
					res.json(user);
				}
			});
		};
	},
	logout : function(req, res){
		req.session.destroy();
		res.send({success : true});
	},
	delete : function(req, res){
		User.remove({_id : req.params._id}, function(err){
	    	if(err){
	    		res.send('unable to delete');
	    	} else {
	    		res.send({success : true});
	    	}
    	})
	}
}