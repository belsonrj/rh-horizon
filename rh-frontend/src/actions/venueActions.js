function addVenue(venue, eventId){
    const configObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name: venue.name,
        address: venue.address,
        venue_type: venue.venue_type,
        times_visited: venue.times_visited,
        event_id: venue.event_id
      })
    }
  
    return dispatch => {
      dispatch({type: "ADD_VENUE", venue})
      fetch(`http://localhost:3000/api/v1/events/${eventId}/venues`, configObj)
    }
  }
  
  export function fetchVenues() {
    return (dispatch) => {
      fetch('http://localhost:3000/api/v1/venues')
      .then(resp => resp.json())
      .then(ven => dispatch({
        type: 'FETCH_VENUES',
        payload: ven
      }))
    }
  }
  
  export const deleteVenue = (venueId) => {
  
    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/venues/${venueId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(user => dispatch({type: 'DELETE_VENUE', payload: user}))
    }
  }
  
  export const editVenue = (data, venueId) => {
    debugger;
    return (dispatch) => {
      fetch(`http://localhost:3000/api/v1/venues/${venueId}`, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'PATCH',
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(venue => dispatch({type: 'EDIT_VENUE', payload: venue}))
    }
  }
  
  
  export { addVenue }