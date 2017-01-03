/// <reference path="../Scripts/angular.js" />
/// <reference path="../Scripts/angular-route.js" />
/// <reference path="../app/app.js" />
/// <reference path="../Scripts/angular-mocks.js" />
/// <reference path="../Scripts/jasmine/jasmine.js" />
/// <reference path="../app/Controllers/productController.js" />
/// <reference path="../app/Services/productService.js" />

describe('productController', function () {
    beforeEach(module('demoApp'));
    var scope, controller;
    describe('productController', function () {
        beforeEach(inject(function ($rootScope, $controller) {

            scope = $rootScope.$new();
            controller = $controller('productController', {
                $scope: scope
            });
        }));
        it('should display Name as Debasis', function () {
            var result = scope.Name;
            expect(result).toEqual('Debasis');
        });
        it('should display Name as Debasis', function () {
            var result = scope.Name;
            expect(result).toEqual('Debasis');
        });
    });
});