four51.app
    .directive('ffoCarousel', function() {
        return {
            scope: {
                indicators: '=',
                timeout: '=',
                controls: '='
            },
            restrict: 'E',
            templateUrl: 'partials/controls/ffoCarousel.html',
            controller: 'ffoCarouselCtrl'
        }
    })
    .controller('ffoCarouselCtrl', ['$scope', 'User', function($scope, User){
//        local solution
/*        var path = 'lib/assets/Slides/';
        $scope.Slides = [
            {
                'imageUrl':path + 'banner2.jpg',
                'linkUrl':null,
                'externalLink':false
            },
            {
                'imageUrl':path + 'banner3.jpg',
                'linkUrl':null,
                'externalLink':false
            },
            {
                'imageUrl':path + 'banner4.jpg',
                'linkUrl':null,
                'externalLink':false
            }
        ];*/

//        data model solution
        $scope.showCarousel = false;
        User.get(function(user) {
            $scope.Slides = [];
            angular.forEach(user.CustomFields, function(f) {
                if (f.Name.indexOf('carouselImage') > -1) {
                    var s = {
                        'imageUrl': f.File.Url,
                        'linkUrl': f.Label == 'None' ? null : f.Label,
                        'externalLink': f.Label.indexOf('http') > -1
                    };
                    $scope.Slides.push(s);
                }
            });
            $scope.showCarousel = $scope.Slides.length > 1;
        })
    }])
;
