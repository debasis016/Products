demoApp.controller("productController", function ($scope, productService) {
    $scope.Products = productService.getProducts();
    $scope.Name = 'Debasis';
})