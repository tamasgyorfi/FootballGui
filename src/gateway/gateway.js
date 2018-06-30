
const gateway = "https://football-api-gateway.herokuapp.com"
const schedulesEndpoint = "/aggregator/v1/schedules"
const betsEndpoint = "/aggregator/v1/bets"
const fetchApi = "/upcoming-matches"
const saveApi = "/{0}/user-bets"

export function fetchData(payload) {
  return doPost(gateway+schedulesEndpoint+fetchApi, payload)
}


export function saveData(userId, payload) {
  return doPost(gateway+betsEndpoint+saveApi.format(userId), payload)
}

function doPost(endpoint, payload) {
  return fetch(endpoint, {
      method: 'POST',
      dataType: 'jsonp',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        payload
      )
  }, {mode: 'no-cors'})
}

String.prototype.format = function() {
    var formatted = this;
    for( var arg in arguments ) {
        formatted = formatted.replace("{" + arg + "}", arguments[arg]);
    }
    return formatted;
};