angular.module("sportsStore")
.constant("dataUrl", "http://localhost:2403/products?callback=jsonp_callback")
.controller("sportsStoreCtrl", function ($scope, $http, dataUrl) {
	
$scope.data = {};
$scope.data.products = {};
$scope.data.products = [{"Name":"Kayak","description":"A boat for one person","category":"Watersports","price":275,"id":"91300bc73f45c82b"},{"Name":"Lifejacket","description":"Protective and fashionable","category":"Watersports","price":48.95,"id":"7f6e52d104de78b3"},{"Name":"Soccer Ball","description":"FIFA-approved size and weight","category":"Soccer","price":19.5,"id":"d73e7efbf518b8a2"},{"Name":"Corner Flags","description":"Give your playing field a professional touch","category":"Soccer","price":34.95,"id":"a8ede2ba8fcedb65"},{"Name":"Stadium","description":"Flat-packed 35,000-seat stadium","category":"Soccer","price":79500,"id":"39c8eeabf901a893"},{"Name":"Thinking Cap ","description":"Improve your brain efficiency by 75%","category":"Chess","price":16,"id":"78ad967eab3ff8ff"},{"Name":"Unsteady Chair","description":"Secretly give your opponent a disadvantage","category":"Chess","price":29.95,"id":"311bd783f36d38d1"},{"Name":"Human Chess Board","description":"A fun game for the family","category":"Chess","price":75,"id":"fd17324b62d6c820"},{"Name":"Bling-Bling King","description":"Gold-plated, diamond-studded King","category":"Chess","price":1200,"id":"582163c10a0cf8c2"}];
	$http.jsonp(dataUrl). //function gave error
  success(function(data) {
    $scope.data.products2 = data;
    
  })
  .error(function (error, status, headers, config) {
    $scope.data.error = error;
  });

});