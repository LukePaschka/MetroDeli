four51.app.directive('shortGalleryViewMinimal', function() {
    return {
        restrict: 'E',
        scope: {
            p: '=',
            user: '='
        },
        templateUrl: 'partials/controls/shortGalleryListView.html',
        controller: 'shortProductViewCtrl'
    }
});