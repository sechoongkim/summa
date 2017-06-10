
app.factory('LoginFactory', function($http){
	var register = {};

	register.signIn = function(data){
		return $http.post('/auth/signin', data);
	};

	return register;

});

