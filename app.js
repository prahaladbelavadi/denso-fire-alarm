// app.js
var routerApp = angular.module('routerApp', ['ui.router','chart.js']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS

        .state('home', {
            url: '/home',
            templateUrl: 'partial-home.html'
        }


        // nested list with custom controller
        .state('home.list', {
            url: '/list',
            templateUrl: 'partial-home-list.html',
        controller: function($scope) {
            $scope.dogs = ['Go Left to the Fire Exit near the Pharmacy.', 'Go Straight to the Clearing safe are straight down the hall.', 'Take the stairwell to your right.'];
            }
        })

        // nested list with just some random string data
        .state('home.paragraph', {
            url: '/paragraph',
            template: 'No, there is no need to panic at the moment.'
        })
//

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS

        .state('about', {
            url: '/about',
            views: {

                // the main template will be placed here (relatively named)
                '': { templateUrl: 'partial-about.html' },

                // the child views will be defined here (absolutely named)
                'columnOne@about': { template: 'Look I am a column!' },

                // for column two, we'll define a separate controller
                'columnTwo@about': {
                    templateUrl: 'table-data.html',
                    controller: 'scotchController'
                }
            }

        })
    // Survivor state
        .state('Survivor', {
            url: '/Survivor',
            templateUrl: 'partial-survivor.html'
        })

    // Fireman state
        .state('Fireman', {
            url: '/Fireman',
            templateUrl: 'partial-fireman.html'
        })


});

// let's define the scotch controller that we call up in the about state
routerApp.controller('scotchController', function($scope) {

    $scope.message = 'test';

    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];

});
});
