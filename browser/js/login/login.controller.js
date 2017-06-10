app.controller('LoginCtrl', function ($scope, AuthService, $state, $rootScope, LoginFactory) {

    $scope.login = {};
    $scope.error = null;

    $scope.sendLogin = function (loginInfo) {
   
        LoginFactory.signIn($scope.login)
            .then((res) => {
                console.log("response");
                console.log(res);
                $scope.error = "Login successful";
            })
            .catch((err) => {
                console.log(err);
            });
    

    };

});