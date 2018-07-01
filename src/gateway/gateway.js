
const gateway = "https://football-api-gateway.herokuapp.com"

const schedulesEndpoint = "/aggregator/v1/schedules"
const usersEndpoint = "/aggregator/v1/users"
const betsEndpoint = "/aggregator/v1/bets"

const fetchApi = "/upcoming-matches"
const saveApi = "/{0}/user-bets"
const saveUserApi = "/add"
const getUserFriendsApi = "/user-friends/{0}"
const updateFriendsApi = "/update"

export function fetchData(payload) {
  return doPost(gateway+schedulesEndpoint+fetchApi, payload)
}

export function saveData(userId, payload) {
  return doPost(gateway+betsEndpoint+saveApi.format(userId), payload)
}

export function registerUser(payload) {
  return doPost(gateway+usersEndpoint+saveUserApi, payload)
}

export function getUserFriends() {
  const id = getUserId()
  return doPost(gateway+usersEndpoint+getUserFriendsApi.format(id), {userId: id, token: ""})
}

export function trackUser(userIdToTrack) {
  const id = getUserId()
  return doPost(gateway+usersEndpoint+updateFriendsApi, {originatingUserId: id, friendsTracked: [userIdToTrack], friendsUntracked:[]})
}

export function untrackUser(userIdToUntrack) {
  const id = getUserId()
  return doPost(gateway+usersEndpoint+updateFriendsApi, {originatingUserId: id, friendsTracked: [], friendsUntracked:[userIdToUntrack]})
}

function getUserId() {
  return (window.FB.getAuthResponse() || {}).userID
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