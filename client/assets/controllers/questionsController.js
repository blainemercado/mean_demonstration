app.controller('questionsController', ['$scope', '$location','$routeParams', 'usersFactory', 'questionsFactory', function($scope, $location, $routeParams, usersFactory, questionsFactory){
		console.log('im in the questionsController app');

		var index = function(){
			questionsFactory.index(function(returned_data){
				console.log('All questions in the questions Controller: ', returned_data);
				$scope.questions = returned_data;
			})
		};
		index();

		$scope.logout = function(){
			usersFactory.logout(function(url){
				$location.url(url);
			})
		}
}])