import * as Cookies from "js-cookie"
//import { browserHistory } from 'react-router';

const token = () => Cookies.get("eventSession")

export function fetchEvents() {
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
    fetch(`http://localhost:3001/api/v1/events`, configObj)
      .then(resp => resp.json())
      .then(events => {
        dispatch({
          type: 'FETCH_EVENTS',
          payload: events
        })
      })
      .catch(() => console.log("Can't access response. Please try again later"))
  }
}

export const fetchUserEvents = (userId) => {
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
    dispatch({type: 'LOAD_USER_EVENTS'})
    fetch(`http://localhost:3001/api/v1/users/${userId}/events`, configObj)
      .then(resp => resp.json())
      .then(events => {
        dispatch({
          type: 'FETCH_USER_EVENTS',
          events
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
      venue: evnt.venue,
      date: evnt.date,
      url: evnt.url,
      comments: evnt.comments,
      user_id: evnt.user_id
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



export const deleteEvent = (eventId, userId) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:3001/api/v1/users/${userId}/events/${eventId}`, {
      method: 'DELETE'
    })
    const user = await response.json()
    return dispatch({ type: 'DELETE_TRANSACTION', payload: user })
  }
}