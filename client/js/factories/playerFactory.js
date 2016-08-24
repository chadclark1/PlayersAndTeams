var app = angular.module('app', ['ngRoute']);

//  ******PLAYERS FACTORY*****

    app.factory('playerFactory', function (){
	    // The factory is nothing more than a function that returns an object
	    var players = [
	        {player: 'Chad', team:''},
	        {player: 'Doug', team:''},
	        {player: 'Alexia', team:''}];
	    var factory = {};
	    factory.index = function (callback){
	        callback(players);
	    }

	    factory.create = function(player, callback){
	        player.team = '';
	        players.push(player);
	    	callback(players);
	    }

	    factory.delete = function(id, callback){
	    	selectedPlayer = player[id];
	    	selectedPlayer.team = team;
	    	callback(players);
	    }

	    factory.associate = function(data){
      		players[data.playerIdx].team = data.team;
   		}

   		factory.removePlayerFromTeam = function($index){
	      players[$index].team = "";
	   	}

	    return factory;
	});