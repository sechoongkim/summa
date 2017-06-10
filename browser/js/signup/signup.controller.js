app.controller('SignupCtrl', function($scope, $state, SignupFactory, AuthService) {

    $scope.sendRegister = function(){
        SignupFactory.createAccount($scope.register)
            .then((res) => {
                console.log("response");
                console.log(res);
                $scope.error = "Signup successful";
            })
            .catch((err) => {
                console.log(err);
                $scope.error = (err.data.message);
            });
    };

});