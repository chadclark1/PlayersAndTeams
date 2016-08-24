var app = angular.module('app', ['ngRoute']);

//  ******TEAMS CONTROLLER*****

     app.controller('teamsController', ['$scope', 'teamFactory', function ($scope, teamFactory, $location) {
    		console.log($location);
	      	function setTeams(data){
			$scope.teams = data;
			$scope.team = {};
		}
	    
	    $scope.index = function(){
		    teamFactory.index(setTeams);
		}

		$scope.index();

	    $scope.create = function(){
	    	console.log($location);
	    	teamFactory.create($scope.team, setTeams)
	    	
	    }
	    $scope.delete = function(id){
	        console.log(id);
		    teamFactory.delete(id,setTeams);
		}
    }]);