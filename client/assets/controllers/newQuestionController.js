app.controller('newQuestionController', ['$scope', '$location','$routeParams', 'usersFactory', 'questionsFactory', function($scope, $location, $routeParams, usersFactory, questionsFactory){

		$scope.create = function(question){
			console.log("this is the qustion object passed from form in newQuestion to create function: ", question);
			questionsFactory.create(question, function(url){
				$location.url(url);
			})
		};
		$scope.logout = function(){
			usersFactory.logout(function(url){
				$location.url(url);
			})
		}
}])