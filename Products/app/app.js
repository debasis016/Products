var demoApp = angular.module('demoApp', ['ngRoute']);
demoApp.config(function ($routeProvider) {
    $routeProvider
        .when('/view1',
        {
            controller: 'productController',
            templateUrl: 'app/Views/view1.html'
        })
        .when('/view2',
        {
            controller: 'productController1',
            templateUrl: 'app/Views/view2.html'
        })
        .otherwise({ redirectTo: '/view1' });
});