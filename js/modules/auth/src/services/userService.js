/**
 * @ngdoc service
 * @name user
 *
 * @description
 * A service to handle user data.
 */

angular.module('auth').
	factory('user', ['$window', '$resource', 'apiClient',
			function($window, $resource, apiClient) {
		return $resource(apiClient.urls.user) ;
	}]);
