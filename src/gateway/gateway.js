import React from 'react'

const gateway = "https://football-api-gateway.herokuapp.com"
const endpoint = "/aggregator/v1/schedules"
const fetchApi = "/upcoming-matches"

const fetchData = (props) => {
	return fetch(gateway + endpoint + fetchApi, {
  		method: 'POST',
  		headers: {
    		'Accept': 'application/json',
    		'Content-Type': 'application/json',
  		},
  		body: JSON.stringify({
    		userId: {props.userId}
  		})
	})
}
