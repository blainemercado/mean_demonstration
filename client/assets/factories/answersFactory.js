app.factory('answersFactory', ['$http', function($http){
	var answers = [];
	var answer = [];

	function answersFactory(){
		var _this = this;
		this.index = function(callback){
			$http.get('/answers').then(function(returned_data){
				console.log(returned_data.data);
				answers = returned_data.data;
				callback(answers);
			});
		};
		this.create = function(answer, callback){
			$http.post('/answers', answer).then(function(){
				callback('/dashboard');
			})
		};
		this.delete = function(answer, callback){
			_id = answer._id;
			$http.delete('/answers/'+_id).then(function(){
				callback();
			})
		};
		this.questionAnswers = function(_id, callback){
			$http.get('/answers/'+_id).then(function(returned_data){
				console.log("This is the returned_data in the factory: ", returned_data);
				callback(returned_data.data);
			})
		};
		this.like = function(_id, callback){
			$http.put('/answers/'+_id+'/like').then(function(){
				callback();
			})
		}
	}

	return new answersFactory();
}])