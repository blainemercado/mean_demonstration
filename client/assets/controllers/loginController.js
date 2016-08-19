app.controller('loginController', ['$scope', '$location', 'usersFactory', function($scope, $location, usersFactory){
	$scope.login = function(user){
		console.log('I made it to $scope.login in loginController');
		usersFactory.login(user, function(url){
			$location.url(url);
		});
		
	}
}])