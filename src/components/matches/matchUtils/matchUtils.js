export function convertResponseToInternal(json) {
	return json.schedules.map(element => {

		var bet = getBet(json.bets, element.matchId)

		var schedule = {           
        	homeTeamImg: getImage(element.homeTeam.name, json.crests),
        	awayTeamImg: getImage(element.awayTeam.name, json.crests),
        	homeTeamName: element.homeTeam.name,
        	awayTeamName: element.awayTeam.name,
        	date: getDate(element.date).getTime(),
        	competition: element.competition,
        	changed: false,
        	matchId: element.matchId,
        }

        return Object.assign({}, schedule, bet)
	});
}

function getBet(json, matchId) {
	if (json) {
		for (var i = 0; i < json.length; i++){
	  		if (json[i].matchId == matchId){
	  			return {homeTeamGoals: json[i].homeTeamGoals, awayTeamGoals: json[i].awayTeamGoals}
	  		}
		}
	}
}

function getDate(date) {
	return new Date(date.date.year,
		date.date.month,
		date.date.day,
		date.time.hour,
		date.time.minute,
		0,
		0);
}

function getImage(teamName, crests) {
	var imgName = crests.baseUrl+crests.crests[teamName]+crests.format.toLowerCase();
	return imgName
} 

export function convertInternalReprsentationToRequest(json) {
	return {bets: json.map(element => {
		return {
			competitionId: element.competition,
            matchId: element.matchId,
            matchDate: new Date(element.date).toISOString(),
            homeTeamId: element.homeTeamName,
            awayTeamId: element.awayTeamName,
            homeTeamGoals: element.homeTeamGoals ? parseInt(element.homeTeamGoals) : 0,
            awayTeamGoals: element.awayTeamGoals ? parseInt(element.awayTeamGoals) : 0
		};
	}),
	token: ""
}
}