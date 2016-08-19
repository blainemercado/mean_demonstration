app.controller('newAnswerController', ['$scope', '$location','$routeParams', 'usersFactory', 'questionsFactory', 'answersFactory', function($scope, $location, $routeParams, usersFactory, questionsFactory, answersFactory){
		question_id = $routeParams._id;

		var index = function(){
			questionsFactory.showQuestion(question_id, function(returned_data){
				$scope.question = returned_data;
				console.log("$scope.question right here: ", $scope.question);
			})
		};
		index();

		$scope.create = function(answer){
			console.log("this is the qustion object passed from form in newAnswer to create function: ", answer);
			answer.question_id = question_id;
			answersFactory.create(answer, function(url){
				$location.url(url);
			})
		};
		$scope.logout = function(){
			usersFactory.logout(function(url){
				$location.url(url);
			})
		}
}])