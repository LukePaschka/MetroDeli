four51.app.controller('SalesDocsCtrl', ['$scope', '$routeParams', '$451', function($scope, $routeParams, $451) {
		$scope.DocumentCategories = [
            {
                Name:'General Brochures',
                SalesDocuments: [
                    {Name: "2014 Metro Deli Brochure", Image: "MDBrochure2014.jpg", PDF: "MDBrochure2014.pdf"},
                    {Name: "2014 Metro Deli Nutrition Guide", Image: "MDeliNutritionBook.jpg", PDF: "MDeliNutritionBook.pdf"},
                ]
            },
            {
                Name:'Chicken',
                SalesDocuments: [
                    {Name: "Buffalo Style Chicken Breast", Image: "MD_BuffaloChicken.jpg", PDF: "MD_BuffaloChicken.pdf"},
                    {Name: "Deep Fried & Oven-Roasted Chicken Breast", Image: "MD_FriedChicken_and_OvenRoastedChicken.jpg", PDF: "MD_FriedChicken_and_OvenRoastedChicken.pdf"}
                ]
            },
            {
                Name:'Chips',
                SalesDocuments: [
                    {Name: "Chips", Image: "MDChipsSS.jpg", PDF: "MDChipsSS.pdf"}
                ]
            },
            {
                Name:'Condiments',
                SalesDocuments: [
                    {Name: "Condiments", Image: "MD_Condiments_SS.jpg", PDF: "MD_Condiments_SS.pdf"}
                ]
            },
            {
                Name:'Ham',
                SalesDocuments: [
                    {Name: "Smokehouse Uncured Ham", Image: "MDSmokehouseHamSS.jpg", PDF: "MDSmokehouseHamSS.pdf"},
                    {Name: "Uncured Gourmet Ham/Honey Ham", Image: "MD_Hams.jpg", PDF: "MD_Hams.pdf"},
                    {Name: "Uncured Gourmet Ham", Image: "MD_AllNaturalHam_SS.jpg", PDF: "MD_AllNaturalHam_SS.pdf"}
                ]
            },
            {
                Name:'Meats (additional)',
                SalesDocuments: [
                    {Name: "Angus Beef Franks", Image: "MD_AngusHotDog.jpg", PDF: "MD_AngusHotDog.pdf"},
                    {Name: "Beef Top Round", Image: "MD_BeefTopRound_SS_Print.jpg", PDF: "MD_BeefTopRound_SS_Print.pdf"},
                    {Name: "Corned Beef & Pastrami", Image: "MD_CornedBeefAndPastsrami.jpg", PDF: "MD_CornedBeefAndPastsrami.pdf"},
                    {Name: "Pepperoni & Salami", Image: "MD_PepperoniAndSalami_SS.jpg", PDF: "MD_PepperoniAndSalami_SS.pdf"}
                ]
            },
            {
                Name:'Salads',
                SalesDocuments: [
                    {Name: "Prepared Deli Salads", Image: "MD_PreparedDeliSalads_SS.jpg", PDF: "MD_PreparedDeliSalads_SS.pdf"}
                ]
            },
            {
                Name:'Turkey',
                SalesDocuments: [
                    {Name: "Applewood-smoked Turkey Breast", Image: "MD_SmokedTurkey_SS.jpg", PDF: "MD_SmokedTurkey_SS.pdf"},
                    {Name: "Deep Fried Turkey Breast", Image: "MD_DFTurkey.jpg", PDF: "MD_DFTurkey.pdf"},
                    {Name: "Honey Roasted Turkey Breast", Image: "MDHoneyRoastedTurkeyBreastSS.jpg", PDF: "MDHoneyRoastedTurkeyBreastSS.pdf"},
                    {Name: "Turkey Breast", Image: "MD_TurkeyBreast_SS_Print.jpg", PDF: "MD_TurkeyBreast_SS_Print.pdf"}
                ]
            }
        ];
    $scope.activeSalesDocuments = $scope.DocumentCategories[0].SalesDocuments;

    /*    $scope.SalesDocuments = [
            {Name: "2014 Metro Deli Brochure", Image: "MDBrochure2014.jpg", PDF: "MDBrochure2014.pdf"},
            {Name: "2014 Metro Deli Nutrition Guide", Image: "MDeliNutritionBook.jpg", PDF: "MDeliNutritionBook.pdf"},
            {Name: "Concept Brochure", Image: "MDConceptBrochure.png", PDF: "MDConceptBrochurer1.pdf"},
            {Name: "Uncured Gourmet Ham", Image: "MD_AllNaturalHam_SS.jpg", PDF: "MD_AllNaturalHam_SS.pdf"},
            {Name: "Angus Beef Franks", Image: "MD_AngusHotDog.jpg", PDF: "MD_AngusHotDog.pdf"},
            {Name: "Beef Top Round", Image: "MD_BeefTopRound_SS_Print.jpg", PDF: "MD_BeefTopRound_SS_Print.pdf"},
            {Name: "Buffalo Style Chicken Breast", Image: "MD_BuffaloChicken.jpg", PDF: "MD_BuffaloChicken.pdf"},
            {Name: "Corned Beef & Pastrami", Image: "MD_CornedBeefAndPastsrami.jpg", PDF: "MD_CornedBeefAndPastsrami.pdf"},
            {Name: "Deep Fried Turkey Breast", Image: "MD_DFTurkey.jpg", PDF: "MD_DFTurkey.pdf"},
            {Name: "Deep Fried & Oven-Roasted Chicken Breast", Image: "MD_FriedChicken_and_OvenRoastedChicken.jpg", PDF: "MD_FriedChicken_and_OvenRoastedChicken.pdf"},
            {Name: "Uncured Gourmet Ham/Honey Ham", Image: "MD_Hams.jpg", PDF: "MD_Hams.pdf"},
            {Name: "Pepperoni & Salami", Image: "MD_PepperoniAndSalami_SS.jpg", PDF: "MD_PepperoniAndSalami_SS.pdf"},
            {Name: "Applewood-smoked Turkey Breast", Image: "MD_SmokedTurkey_SS.jpg", PDF: "MD_SmokedTurkey_SS.pdf"},
            {Name: "Prepared Deli Salads", Image: "MD_PreparedDeliSalads_SS.jpg", PDF: "MD_PreparedDeliSalads_SS.pdf"},
            {Name: "Turkey Breast", Image: "MD_TurkeyBreast_SS_Print.jpg", PDF: "MD_TurkeyBreast_SS_Print.pdf"},
            {Name: "Condiments", Image: "MD_Condiments_SS.jpg", PDF: "MD_Condiments_SS.pdf"},
            {Name: "Honey Roasted Turkey Breast", Image: "MDHoneyRoastedTurkeyBreastSS.jpg", PDF: "MDHoneyRoastedTurkeyBreastSS.pdf"},
            {Name: "Smokehouse Uncured Ham", Image: "MDSmokehouseHamSS.jpg", PDF: "MDSmokehouseHamSS.pdf"},
            {Name: "Chips", Image: "MDChipsSS.jpg", PDF: "MDChipsSS.pdf"}
        ];*/

}]);