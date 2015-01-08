four51.app.filter('onproperty', ['$451', function($451) {
	var defaults = {
		'OrderStats': 'Type',
		'Message': 'Box'
	};

	return function(input, query) {
		if (!input || input.length === 0) return;
		if (!query) return input;
		query.Property = query.Property || defaults[query.Model];
		return $451.filter(input, query);
	}
}]);

four51.app.filter('kb', function() {
	return function(value) {
		return isNaN(value) ? value : parseFloat(value) / 1024;
	}
});

four51.app.filter('r', ['$sce', 'WhiteLabel', function($sce, WhiteLabel) {
	return function(value) {
		var result = value, found = false;
		angular.forEach(WhiteLabel.replacements, function(c) {
			if (found) return;
			if (c.key == value) {
				result = $sce.trustAsHtml(c.value);
				found = true;
			}
		});
		return result;
	}
}]);

four51.app.filter('rc', ['$sce', 'WhiteLabel', function($sce, WhiteLabel) {
	return function(value) {
		var result = value, found = false;
		angular.forEach(WhiteLabel.replacements, function(c) {
			if (found) return;
			if (c.key.toLowerCase() == value.toLowerCase()) {
				result = $sce.trustAsHtml(c.value);
				found = true;
			}
		});
		return result;
	}
}]);

four51.app.filter('rl', ['$sce', 'WhiteLabel', function($sce, WhiteLabel) {
	return function(value) {
		var result = value, found = false;
		angular.forEach(WhiteLabel.replacements, function(c) {
			if (found) return;
			if (c.key.toLowerCase() == value.toLowerCase()) {
				result = $sce.trustAsHtml(c.value.toLowerCase());
				found = true;
			}
		});
		return result;
	}
}]);

four51.app.filter('noliverates', function() {
	return function(value) {
		var output = [];
		angular.forEach(value, function(v) {
			if (v.ShipperRateType != 'ActualRates')
				output.push(v);
		});
		return output;
	}
});

four51.app.filter('paginate', function() {
	return function(input, start) {
		if (typeof input != 'object' || !input) return;
		start = +start; //parse to int
		return input.slice(start);
	}
});

four51.app.filter('getfieldbyname', function() {
    return function(fields, name) {
        var result = null;

        angular.forEach(fields, function(field) {
            if (field.Name == name) {
                result = field;
            }
        });
        return result;
    }
});

four51.app.filter('metrodeliorderfields', function() {
    return function(fields) {
        var result = [];

        var filteredFields = [
            "US Foods Dept #",
            "Contact Phone",
            "US Foods PO/Reference"
        ];

        angular.forEach(fields, function(field) {
            if (filteredFields.indexOf(field.Name) == -1) {
                result.push(field);
            }
        });

        return result;
    }
});

four51.app.filter('metrodeliprojectrequestfields', function() {
    return function(field) {
        var result = field;

        var fieldNames = {
            "SiteName": "Site Name",
            "USFoodsNum": "US Foods Customer Number",
            "Division": "US Foods Division Name",
            "SiteAddress": "Site Address",
            "SiteContName": "Site Contact Name",
            "SiteEmail": "Site Contact Email",
            "SitePhone": "Site Contact Phone",
            "USFoodSalesRep": "US Food Sales Representative",
            "USFoodSalesEmail": "US Foods Sales Representative Email",
            "USFoodSalesPhone": "US Foods Sales Representative Phone",
            "USFoodVPDivision": "US Foods Division VP of Sales",
            "USFoodVPEmail": "US Foods Division VP of Sales Email",
            "SurveyDate": "Survey Target Date",
            "InstallDate": "Install Target Date"
        };

        if (fieldNames[field]) {
            result = fieldNames[field];
        }

        return result;
    }
});

four51.app.filter('filteredCategories', function() {
	return function(categories) {
		var result = [];

		var filteredCategoryIDs = [
			"Gallery"
		];

		angular.forEach(categories, function(category) {
			if (filteredCategoryIDs.indexOf(category.InteropID) == -1) {
				result.push(category);
			}
		});

		return result;
	}
});
