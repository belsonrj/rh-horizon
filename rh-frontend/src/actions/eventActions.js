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
    fetch(`http://localhost:3001/api/v1/users/${user.id}/events`, configObj)
      .then(resp => resp.json())
      .then(events => {
        dispatch({
          type: 'FETCH_USER_EVENTS',
          paylod: events
        })
      })
      .catch(() => console.log("Can't access response. Please try again later"))
  }
}

export const addEvent = (evnt, userId) => {

  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/accounts/${userId}/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: token()
      },
      credentials: 'include',
      body: JSON.stringify(evnt)
    })
    .then(response => response.json())
    .then(user => {
        if (user.error) {
          alert(user.error)
        } else {
          dispatch({type: 'ADD_EVENT', payload: user})
        }
      }
    )
  }
}

