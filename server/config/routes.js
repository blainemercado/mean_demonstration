var path = require('path');
var users = require(path.join(__dirname, '../controllers/sc_users.js'));
var questions = require(path.join(__dirname, '../controllers/sc_questions.js'));
var answers = require(path.join(__dirname, '../controllers/sc_answers.js'));

module.exports = function(app){
	// User routes
	app.get('/users', users.index);
	app.post('/users', users.login);
	app.post('/users/logout', users.logout);
	app.get('/users/:_id', users.show);
	app.delete('/users/:_id', users.delete);
	// Question routes
	app.get('/questions', questions.index);
	app.post('/questions', questions.create);
	app.get('/questions/:_id', questions.show);
	app.delete('/questions/:_id', questions.delete);
	// Answer routes
	app.get('/answers', answers.index);
	app.post('/answers', answers.create);
	app.get('/answers/:_id', answers.questionAnswers);
	app.put('/answers/:_id/like', answers.like);
	app.delete('/answers/:_id', answers.delete);
}