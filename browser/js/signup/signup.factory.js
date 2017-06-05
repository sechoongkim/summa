
app.factory('SignupFactory', function($http){
	var register = {};

	register.createAccount = function(data){
		return $http.post('/auth/signup', data);
	};

	return register;

});

