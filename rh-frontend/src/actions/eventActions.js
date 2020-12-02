
export function fetchEvents() {
  return (dispatch) => {
    fetch('http://localhost:3001/api/v1/events')
    .then(resp => resp.json())
    .then(events => dispatch({
      type: 'FETCH_EVENTS',
      payload: events
    }))
  }
}

export const addEvent = (data) => {
  return (dispatch) => {
    fetch('http://localhost:3001/api/v1/events', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(event => dispatch({type: 'ADD_EVENT', payload: event}))
  }

}

export const editEvent = (data, eventId) => {
  debugger;
  return (dispatch) => {
    fetch(`http://localhost:3001/api/v1/events/${eventId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(event => dispatch({type: 'EDIT_EVENT', payload: event}))
  }
}

export const deleteEvent = (eventId) => {
  return (dispatch) => {
    return fetch(`http://localhost:3001/api/v1/events/${eventId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(event => dispatch({type: 'DELETE_EVENT', payload: event}))
  }
}
