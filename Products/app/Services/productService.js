demoApp.service('productService', function () {
    this.getProducts = function () {
        return Products;
    }
    var Products = [
        { ProductName: 'Product1', Price: '10' },
        { ProductName: 'Product2', Price: '20' },
        { ProductName: 'Product3', Price: '30' }
    ];
})