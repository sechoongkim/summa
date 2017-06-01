app.config(function ($stateProvider) {
    $stateProvider.state('pages', {
        url: '/pages',
        templateUrl: '/js/page/page.html',
        controller: 'PageController'
       
    });
});
