
app.factory('RegisterFactory',($http) =>{
	const register = {}

	register.create = (data) => {
		return $http.post('/users', data);
	}


	var getData = function(res) {
    	return res.data;
  	}
	
	register.matches = () => {
		return $http.get('/matches')
			.then(getData)
	}

	return register;

})