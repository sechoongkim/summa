
app.factory('SignupFactory', function($http){
	var register = {};

	register.create = function(data){
		return $http.post('/users', data);
	};

	return register;

});

