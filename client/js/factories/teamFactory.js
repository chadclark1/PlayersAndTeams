//  ******TEAMS FACTORY*****

	app.factory('teamFactory', function (){
	    	    // The factory is nothing more than a function that returns an object
	    var teams = [
	        {team: 'Patriots'},
	        {team: 'Cardinals'},
	        {team: 'Seahawks'}];
	    var factory = {};
	    factory.index = function (callback){
	        callback(teams);
	    }

	    factory.create = function(team, callback){
	        teams.push(team);
	    	callback(teams);
	    }

	    factory.delete = function(id, callback){
	    	teams.splice(id,1);
	    	callback(teams);
	    }

	    return factory;
	});
