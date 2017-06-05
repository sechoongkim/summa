app.controller('SignupCtrl', function($scope, $state, SignupFactory, AuthService) {

    $scope.sendRegister = function(){
        SignupFactory.createAccount($scope.register)
            .then((res) => {
                console.log("response");
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

});