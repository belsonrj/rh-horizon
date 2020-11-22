import * as Cookies from "js-cookie"

const token = () => Cookies.get("eventSession")

export const addVenue = (ven, userId) => {
    
    return (dispatch) => {
      fetch(`http://localhost:3001/api/v1/users/${userId}/venues`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: token()
        },
        credentials: 'include',
        body: JSON.stringify(ven)
      })
      .then(response => response.json())
      .then(user => {
          if (user.error) {
            alert(user.error)
          } else {
            dispatch({type: 'ADD_VENUE', payload: user})
          }
        }
      )
    }
  }

  export const deleteVenue = (venueId, userId) => {

    return (dispatch) => {
        return fetch(`http://localhost:3001/api/v1/users/${userId}/artists/${venueId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(user => dispatch({type: 'DELETE_VENUE', payload: user}))
    }
}

export const editVenue = (venue, userId) => {
    
  return (dispatch) => {
      debugger;
      fetch(`http://localhost:3001/api/v1/users/${userId}/artists/${venue.id}`, {
          method: 'PATCH',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
          body: JSON.stringify(venue)
      })
      .then(response => response.json())
      .then(user => dispatch({type: 'EDIT_VENUE', payload: user}))
  }
}