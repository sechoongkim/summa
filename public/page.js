app.config(function ($stateProvider) {
    $stateProvider.state('pages', {
        url: '/',
        templateUrl: './js/page/page.html',
        controller: 'PageController'
       
    });
});

app.controller('PageController', function($scope, $stateParams){


})