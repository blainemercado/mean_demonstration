console.log('This is the showQuestionController!');

app.controller('showQuestionController', ['$scope', '$location', '$routeParams', 'usersFactory', 'questionsFactory', 'answersFactory', function($scope, $location, $routeParams, usersFactory, questionsFactory, answersFactory){
	_id = $routeParams._id;

	var showQuestion = function(){
		
		console.log(_id);
		questionsFactory.showQuestion(_id, function(returned_data){
			$scope.question = returned_data;
		});
	};
	showQuestion();

	var questionAnswers = function(){
		answersFactory.questionAnswers(_id, function(returned_data){
			console.log("this should be all the answers for this question: ", returned_data);
			$scope.answers = returned_data;
		})
	};
	questionAnswers();

	$scope.like = function(answer){
		answer_id = answer._id
		answersFactory.like(answer_id, function(){
			questionAnswers();
		})
	}
}]);