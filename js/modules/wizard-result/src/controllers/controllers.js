var WizardResultCtrl = function($scope, $state, $stateParams, searchManager) {
	var self = this;

    this.failed = false;
	this.query = $stateParams;
	this.result = {};
    this.search_again_visible = false;
    this.search_status = '';

    Object.defineProperty(this, 'search_again_button_visible', {
        get: function() {
        	if (self.search_again_visible || self.in_progress)  {
        		return false;
        	}

        	return true;
        }
    });

	// TODO maybe turn this into event listener
    Object.defineProperty(this, 'in_progress', {
        get: function() {
            return searchManager.in_progress;
        }
    });

	//$scope.$on('$viewContentLoaded', function() {
	
        searchManager.wizard_search(self.query.name, self.query.place)
			.then(function(result) {
	       
                $scope.wizardController.name = self.query.name;
                $scope.wizardController.place = self.query.place;

                if ( !result.bingo.name || !result.bingo.place )  {
                    self.search_again_visible = true;
                }

                if ( result.bingo.name && result.bingo.place )  {
                    self.search_status = 'bingo';
                }
                else if ( result.suggestions.name || result.suggestions.place ) {
                    self.search_status =  'suggestions'; 
                }
                else {
                    self.search_status =  'none';
                }

                self.result = result;
			}, 
            function() {
                // handle case when connection to search service failed
                self.failed = true;
            });
	//});
};

WizardResultCtrl.prototype = {
    
};

angular.module('wizardResult').controller('WizardResultCtrl', ['$scope', '$state', '$stateParams', 'searchManager', WizardResultCtrl]);


var SingleResultCtrl = function() {
    
};

SingleResultCtrl.prototype = {

};

var NoResultCtrl = function() {
    
};

NoResultCtrl.prototype = {

};

angular.module('wizardResult').controller('SingleResultCtrl', [SingleResultCtrl]);

var MultipleResultCtrl = function() {

    this.titles = {
    
        trees: {
            en: 'Family Trees',
            he: 'עצי משפחה'
        }
    };
};

MultipleResultCtrl.prototype = {

};

angular.module('wizardResult').controller('MultipleResultCtrl', [MultipleResultCtrl]);