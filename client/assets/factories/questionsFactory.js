app.factory('questionsFactory', ['$http', function($http){
	var questions = [];
	var question = [];

	function questionsFactory(){
		var _this = this;
		this.index = function(callback){
			$http.get('/questions').then(function(returned_data){
				console.log(returned_data.data);
				questions = returned_data.data;
				callback(questions);
			});
		};
		this.create = function(question, callback){
			$http.post('/questions', question).then(function(){
				callback('/dashboard');
			})
		};
		this.delete = function(question, callback){
			_id = question._id;
			$http.delete('/questions/'+_id).then(function(){
				callback();
			})
		};
		this.showQuestion = function(_id, callback){
			$http.get('/questions/'+_id).then(function(returned_data){
				question = returned_data.data;
				console.log("Inside showQuestion in questionsFactory: ", question);
				callback(question);
			})
		}
	}

	return new questionsFactory();
}])