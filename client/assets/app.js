var app = angular.module('app', ['ngRoute', 'ngMessages']);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'partials/login.html',
			controller: 'loginController'
		})
		.when('/dashboard', {
			templateUrl: 'partials/dashboard.html',
			controller: 'questionsController'
		})
		.when('/questions/:_id', {
			templateUrl: 'partials/showQuestion.html',
			controller: 'showQuestionController'
		})
		.when('/new_question', {
			templateUrl: 'partials/newQuestion.html',
			controller: 'newQuestionController'
		})
		.when('/questions/:_id/new_answer', {
			templateUrl: 'partials/newAnswer.html',
			controller: 'newAnswerController'
		})
})