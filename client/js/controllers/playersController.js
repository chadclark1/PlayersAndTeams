//  ******PLAYERS CONTROLLER*****

    //  build the controllers
    app.controller('playersController', ['$scope', 'playerFactory', function ($scope, playerFactory, $location) {
    		console.log($location);
	      	function setPlayers(data){
			$scope.players = data;
			$scope.player = {};
		}

	    $scope.index = function(){
		    playerFactory.index(setPlayers);
		}

		$scope.index();

	    $scope.create = function(){
	    	console.log($location);
	    	playerFactory.create($scope.player, setPlayers)

	    }
	    $scope.delete = function(id){
	        console.log(id);
		    playerFactory.delete(id,setPlayers);
		}

    }]);
