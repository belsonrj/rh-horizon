import * as Cookies from "js-cookie"

const token = () => Cookies.get("eventSession")

export function fetchEvents() {
  return (dispatch) => {
    fetch('http://localhost:3001/api/v1/events', {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
  
      })
      .then(resp => resp.json())
      .then(events => dispatch({
        type: 'FETCH_EVENTS',
        payload: events
    }))   
  }
}

export const fetchUserEvents = user => {
  debugger;
  const configObj = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: token()
    },
    credentials: 'include'
  }
  return (dispatch) => {
    dispatch({type: 'LOAD_EVENTS'})
    fetch(`http://localhost:3001/api/v1/users/${user.id}/events`, configObj)
      .then(resp => resp.json())
      .then(events => {
        dispatch({
          type: 'FETCH_USER_EVENTS',
          payload: events
        })
      })
      .catch(() => console.log("Can't access response. Please try again later"))
  }
}

export const addEvent = (evnt, userId) => {
  const configObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: token()
    },
    credentials: 'include',
    body: JSON.stringify({
      name: evnt.name,
      date: evnt.date,
      url: evnt.url
    })
  }
  return dispatch => {
    dispatch({type: "START_ADD", userId, evnt})
    fetch(`http://localhost:3001/api/v1/users/${userId}/events`, configObj)
      .then(resp => resp.json())
      .then(() => {
        dispatch({ type: "ADD_EVENT", evnt, userId})
    })
  }
}