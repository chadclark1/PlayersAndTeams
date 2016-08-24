var app = angular.module('app', ['ngRoute']);

//  ******ASSOCIATIONS CONTROLLER*****

    app.controller('associationsController', ['$scope', 'playerFactory', 'teamFactory',  function ($scope, playerFactory, teamFactory, $location) {
    		console.log($location);
	      	function setPlayers(data){
			$scope.players = data;
			$scope.player = {};
		}

		function setTeams(data){
			$scope.teams = data;
			$scope.team = {};
		}
	    
	    $scope.index = function(){
		    playerFactory.index(setPlayers);
		    teamFactory.index(setTeams);
		}

		$scope.index();

		$scope.associate = function(){
		    playerFactory.associate($scope.newAssoc);
		}

		$scope.removePlayerFromTeam = function($index){
	      PlayerFactory.removePlayerFromTeam($index);
	   	}

    }]);