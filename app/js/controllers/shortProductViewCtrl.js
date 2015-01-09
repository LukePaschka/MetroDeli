four51.app.controller('shortProductViewCtrl', ['$routeParams', '$scope', 'ProductDisplayService',
	function ($routeParams, $scope, ProductDisplayService) {
	$scope.LineItem = {};
	$scope.LineItem.Product = $scope.p;
	ProductDisplayService.setNewLineItemScope($scope);
	ProductDisplayService.setProductViewScope($scope);
}]);