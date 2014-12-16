angular.module("sportsStore")
.controller("sportsStoreCtrl", function ($scope) {
	$scope.data = {
	products: [
		{ name: "Product #1", description: "A product",
		category: "Category #1", price: 100 },
		{ name: "Product #2", description: "A product",
		category: "Category #1", price: 110 },
		{ name: "Product #3", description: "A product",
		category: "Category #2", price: 210 },
		{ name: "Product #4", description: "A product",
		category: "Category #3", price: 202 }]
	};
})
.constant("productListActiveClass", "btn-primary")
.controller("productListCtrl", function ($scope, $filter, productListActiveClass) {
var selectedCategory = null;
$scope.selectCategory = function (newCategory) {
selectedCategory = newCategory;
}
$scope.categoryFilterFn = function (product) {
return selectedCategory == null ||
product.category == selectedCategory;
}
$scope.getCategoryClass = function (category) {
return selectedCategory == category ? productListActiveClass : "";
}
});