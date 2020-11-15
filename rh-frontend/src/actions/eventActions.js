import * as Cookies from "js-cookie"

let BASE_URL;
if (process.env.NODE_ENV === 'production'){
  BASE_URL = 'http://localhost:3001/api/v1/events'
} else {
  BASE_URL = 'http://localhost:3001/api/v1/events'
}

const token = () => Cookies.get("eventSession")

function fetchEvents(){
  const configObj = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: token()
    },
    credentials: 'include'
  }
  return dispatch => {
    dispatch({type: 'LOAD_EVENTS'})
    fetch(BASE_URL, configObj)
      .then(resp => resp.json())
      .then(events => dispatch({
        type: "ADD_EVENTS",
        events
      }))
  }
}


function addEvent(evnt){
  const configObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: token()
    },
    credentials: 'include',
    body: JSON.stringify(evnt)
  }

  return (dispatch) => {
    dispatch({type: "START_ADD", tempEvent: evnt})
    fetch(BASE_URL, configObj)
      .then(resp => resp.json())
      .then(respEvent => dispatch({
        type: "ADD_EVENT",
        respEvent
      }))
  }
}

export { addEvent, fetchEvents }