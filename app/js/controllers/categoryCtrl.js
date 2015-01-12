four51.app.controller('CategoryCtrl', ['$routeParams', '$sce', '$scope', '$location', '$451', 'Category', 'Product', 'Nav',
function ($routeParams, $sce, $scope, $location, $451, Category, Product, Nav) {
	$scope.productLoadingIndicator = true;
	$scope.settings = {
		currentPage: 1,
		pageSize: 40
	};
	$scope.trusted = function(d){
		if(d) return $sce.trustAsHtml(d);
	}

	function _search() {
		$scope.searchLoading = true;
		Product.search($routeParams.categoryInteropID, null, null, function (products, count) {
			$scope.products = products;
			$scope.productCount = count;
			$scope.productLoadingIndicator = false;
			$scope.searchLoading = false;
		}, $scope.settings.currentPage, $scope.settings.pageSize);
	}

	$scope.$watch('settings.currentPage', function(n, o) {
		if (n != o || (n == 1 && o == 1))
			_search();
	});

	function getCategory(interopID) {
		$scope.categoryLoadingIndicator = true;
		Category.get(interopID, function(cat) {
			$scope.currentCategory = cat;
			$scope.categoryLoadingIndicator = false;
		});
	}

	if ($routeParams.categoryInteropID) {
		getCategory($routeParams.categoryInteropID);
  }
	else {
		getCategory('MD_MAIN');
	}
//	else if($scope.tree){
//		$scope.currentCategory ={SubCategories:$scope.tree};
//	}


	$scope.$on("treeComplete", function(data){
		if (!$routeParams.categoryInteropID) {
			$scope.currentCategory ={SubCategories:$scope.tree};
		}
	});

    // panel-nav
    $scope.navStatus = Nav.status;
    $scope.toggleNav = Nav.toggle;
	$scope.$watch('sort', function(s) {
		if (!s) return;
		(s.indexOf('Price') > -1) ?
			$scope.sorter = 'StandardPriceSchedule.PriceBreaks[0].Price' :
			$scope.sorter = s.replace(' DESC', "");
		$scope.direction = s.indexOf('DESC') > -1;
	});

/*	if ($scope.currentCategory && $scope.currentCategory.InteropID == "Gallery"){
		Nav.status.visible = false;
	} else {
		Nav.status.visible = true;
	}*/

    $scope.isActive = function(path) {
        //var cur_path = $location.path().replace('/', '');
        var splat = $location.path().split('/');
        var cur_path = splat[splat.length-1];
        var result = false;

        if (path instanceof Array) {
            angular.forEach(path, function(p) {
                if (p == cur_path && !result)
                    result = true;
            });
        }
        else {
            if (cur_path == path)
                result = true;
        }
        return result;
    };
}]);