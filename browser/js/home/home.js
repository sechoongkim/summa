app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './js/home/home.html',
        controller: 'TestieController'
       
    });
});

app.controller('TestieController', function($scope, RegisterFactory, $state, $stateParams) {
	console.log("hi");
	$scope.yo = "wuss good sejipoo you hard twerking animallll";
	console.log("hi");
	RegisterFactory.matches()
		.then((d) => {
			$scope.data = d;
		});

	$scope.sendLogin = () => {
		$scope.error = '';
		RegisterFactory.create($scope.login)
			.catch((err) => {
				if(err.data.includes("notNull Violation")){
					$scope.error = "notNull Violation";
				}
				else{
				$scope.error = 'First Name is already in Use';
				// $scope.login.email = ''
				// $scope.log.name = ''
				}
				});
	};

	$scope.goToPage = () => {
		console.log("yo");
		$state.go('pages',{}); 
	};




});