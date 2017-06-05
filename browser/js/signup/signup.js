
app.config(function($stateProvider){
	$stateProvider.state('signup', {
		url:'/signup',
		templateUrl: 'js/signup/signup.html',
		controller: 'SignupCtrl'
	});
});


app.controller('SignupCtrl', function($scope, $state, SignupFactory, AuthService) {

    $scope.sendRegister = function(){
        SignupFactory.create($scope.register)
        .then(function(){
            let obj = {email: $scope.register.email, password: $scope.register.password};

            AuthService.login(obj).then(function(){
                $state.go('home');
            })
            .catch(function() {
                $scope.error = 'Invalid login credentials!';
            });
        })
        .catch(function(){
            $scope.error = 'Email is invalid or already registered!';
            $scope.register.email = '';
            $scope.register.password = '';
        });
    };

});