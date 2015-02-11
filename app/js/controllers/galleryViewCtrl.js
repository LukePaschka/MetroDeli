four51.app.controller('GalleryViewCtrl', ['$scope','Product',
function ($scope, Product) {
    $scope.GalleryVisible = false;
    $scope.ActiveGallery = null;
    $scope.Galleries = [];

    function createGalleries(galleries) {
        angular.forEach(galleries, function(gallery) {
            var gal = {
                Name: gallery.Name,
                Location: gallery.ExternalID,
                Description: gallery.Description,
                ThumbUrl: gallery.SmallImageUrl,
                Images: []
            };
            angular.forEach(gallery.StaticSpecGroups.Pics.Specs, function(s) {
                gal.Images.push(s.FileURL);
            });
            $scope.Galleries.push(gal);
        });
    }

    Product.search('Gallery', null, null, function (products) {
        createGalleries(products);
    }, 1, 100);


    $scope.openGallery = function(value) {
        $scope.ActiveGallery = value;
        $scope.GalleryVisible = true;
    };

    $scope.closeGallery = function() {
        $scope.GalleryVisible = false;
        $scope.ActiveGallery = null;
    };
}]);