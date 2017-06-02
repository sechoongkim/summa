app.directive('navbar', function ($rootScope, $state) {

    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'js/navbar/navbar.html',
        link: function (scope) {

            // $( document ).ready(function(){
            //     $(".button-collapse").sideNav();
            // })

            // scope.closeSideNav = function () {
            //     $('.button-collapse').sideNav('hide');
            // }

            scope.items = [
                { label: 'Home', state: 'home' },
                { label: 'About', state: 'about' },
                { label: 'Projects', state: 'projects' }
                
            ];



        }

    };

});
