app.factory('usersFactory', ['$http', function($http){
	var users = [];
	var user = [];

	function usersFactory(){
		var _this = this;
		this.index = function(callback){
			$http.get('/users').then(function(returned_data){
				console.log(returned_data.data);
				users = returned_data.data;
				callback(users);
			});
		};
		this.login = function(user, callback){
			$http.post('/users', user).then(function(returned_data){
				console.log("should be user info from login function: ", returned_data)
				user = returned_data.data;
				callback('/dashboard');
			})
		};
		this.logout = function(callback){
			$http.post('/users/logout').then(function(){
				callback('/');
			})
		};
		this.delete = function(user, callback){
			_id = user._id;
			$http.delete('/users/'+_id).then(function(){
				callback();
			})
		}
	}

	return new usersFactory();
}])