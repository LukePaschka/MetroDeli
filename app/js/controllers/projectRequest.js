four51.app.controller('ProjectRequestCtrl', ['$scope', '$routeParams', '$451', 'Email', function($scope, $routeParams, $451, Email) {
    $scope.Divisions = ["Bismarck_3J",
        "Chicago_3Y",
        "Cincinnati_3W",
        "Detroit_8L",
        "Grand Forks_3L",
        "Indianapolis_3V",
        "Milwaukee_3D",
        "Minneapolis_3F",
        "Streator_3K",
        "Albany_9B",
        "Boston_2O",
        "Buffalo_2R",
        "Cleveland_3Z",
        "Southern New England_2G",
        "Western PA - Altoona_2H",
        "Western PA - Greensburg_8E",
        "Iowa_6F",
        "Jackson_6U",
        "Kansas City_6I",
        "Little Rock_6D",
        "Memphis_8S",
        "Omaha_9I",
        "Salem_8U",
        "St. Louis_9U",
        "Corona_4U",
        "Las Vegas_3M",
        "Los Angeles_4C",
        "Northwest_4Q",
        "Phoenix_4I",
        "Reno_4R",
        "San Diego_4J",
        "San Francisco_4O",
        "Charlotte_5E",
        "Columbia_5D",
        "Fort Mill_6B",
        "Raleigh_5G",
        "Roanoke_6G",
        "West Virginia_2L",
        "Albuquerque_8V",
        "Austin_6Z",
        "Conroe_3Z",
        "Dallas_6W",
        "Denver_6V",
        "Houston_6Y",
        "Lubbock_6N",
        "Oklahoma City_6J",
        "Oklahoma City - West_6L",
        "Salt Lake City_4H",
        "Atlanta_5I",
        "Lakeland_6Q",
        "Knoxville_6H",
        "Montgomery_5Y",
        "Norcross_8O",
        "Port Orange_5Z",
        "South Florida_8N",
        "Tampa_9D",
        "Allentown_2J",
        "Baltimore_2C",
        "Manassas_5O",
        "Metro NY_2I",
        "Philadelphia_4V",
        "Swedesboro_2Z",
        "Pittston_2N"
    ];

    $scope.EmailDetails = {
        SiteName:"",
        USFoodsNum:"",
        Division:"",
        SiteAddress:"",
        SiteContName:"",
        SiteEmail:"",
        SitePhone:"",
        USFoodSalesRep:"",
        USFoodSalesEmail:"",
        USFoodSalesPhone:"",
        USFoodVPDivision:"",
        USFoodVPEmail:"",
        SurveyDate:"",
        InstallDate:"",
        AdditionalComments:""
    };

    function validForm(emailDetails) {
        var result = {Valid:true, Errors:[]};

        angular.forEach(emailDetails, function(value, key) {
            if (key != 'AdditionalComments' && !value) {
                result.Valid = false;
                result.Errors.push(key);
            }
        });

        return result;
    }

    $scope.formErrors = [];
    $scope.emailSend = function(emailDetails) {
        $scope.formErrors = [];
        var result = validForm(emailDetails);
        if (result.Valid) {
            Email.send(emailDetails);
            $scope.emailSent = true;
        }
        else {
            $scope.formErrors = result.Errors;
        }
    };
}]);