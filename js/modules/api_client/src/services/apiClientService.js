angular.module('apiClient').

	factory('apiClient', function() {
	
	  	return {

	  		urls: {
	  			auth: 			'http://bhsapi.ezdr.net/auth',
	  			user: 			'http://bhsapi.ezdr.net/user', 
	  			mjs: 			'http://bhsapi.ezdr.net/mjs', 
	  			wizard_search: 	'http://bhsapi.ezdr.net/wsearch',
	  			item: 			'http://bhsapi.ezdr.net/item',
	  			suggest: 		'http://bhsapi.ezdr.net/suggest',
	  			ftrees_search:	'http://bhsapi.ezdr.net/fsearch',
	  			ftrees_get: 	'http://bhsapi.ezdr.net/get_ftree_url'
	  		}
	  	};
	});
