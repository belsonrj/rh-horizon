let BASE_URL;
if (process.env.NODE_ENV === 'production'){
  BASE_URL = 'http://localhost:3001/api/v1/events'
} else {
  BASE_URL = 'http://localhost:3001/api/v1/events'
}

function addEvent(events){
  const configObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(events)
  }

  return (dispatch) => {
    dispatch({
      type: "ADD_EVENT",
      events
    })
    fetch(BASE_URL, configObj)
  }
}

function fetchUserEvents(subject="all"){
  return (dispatch) => {
    dispatch({type: 'LOAD_EVENTS'})
    fetch(BASE_URL)
      .then(resp => resp.json())
      .then(events => dispatch({
        type: "ADD_EVENTS",
        events
      }))
  }
}

function fetchEvents() {
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

export { addEvent, fetchUserEvents, fetchEvents }