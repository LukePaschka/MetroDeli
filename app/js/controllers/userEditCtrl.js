four51.app.controller('UserEditCtrl', ['$scope', '$location', '$sce', 'User',
	function ($scope, $location, $sce, User) {
		$scope.loginasuser = {};
		$scope.actionMessage = null;
		$scope.securityWarning = false;

		if($scope.user.Type != 'TempCustomer')
			$scope.user.TempUsername = $scope.user.Username;
		$scope.loginHelp = function(){
			$scope.loginasuser.SendVerificationCodeByEmail = true;

			if($scope.enterResetToken){
				User.reset($scope.loginasuser, function(){console.log("success");}, function(err){$scope.resetPasswordError = err.Message;})
			}else{
				User.login($scope.loginasuser, function(){
						$scope.resetPasswordError = null;
						$scope.enterResetToken = true;
					},
					function(err){
						$scope.resetPasswordError = err.Message;
					});
			}
		}
		$scope.save = function() {
			$scope.actionMessage = null;
			$scope.securityWarning = false;
			$scope.user.Username = $scope.user.TempUsername;
			$scope.displayLoadingIndicator = true;
			if($scope.user.Type == 'TempCustomer')
				$scope.user.ConvertFromTempUser = true;

			var redirecttocheckout = $scope.user.Type == 'TempCustomer';
			User.save($scope.user,
				function(u) {
					$scope.securityWarning = false;
					$scope.displayLoadingIndicator = false;
					$scope.actionMessage = 'Your changes have been saved';
					if (redirecttocheckout){
						$scope.user.TempUsername = u.Username;
					}
					$location.path('checkout');
				},
				function(ex) {
					$scope.displayLoadingIndicator = false;
					if (ex.Code.is('PasswordSecurity'))
						$scope.securityWarning = true;
					else {
						$scope.actionMessage = $sce.trustAsHtml(ex.Message);
					}
				}
			);
		};
		$scope.loginExisting = function(){
			User.login({Username: $scope.loginasuser.Username, Password:  $scope.loginasuser.Password, ID: $scope.user.ID, Type: $scope.user.Type},function(u){
				if($scope.currentOrder){
					$location.path("/checkout");
				}
				else{
					$location.path("/catalog");
				}

			}, function(err){
				$scope.loginAsExistingError = err.Message;
			});
		};
	}]);