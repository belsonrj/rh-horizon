
function addArtist(artist){
  const configObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(artist)
  }

  return dispatch => {
    dispatch({type: "ADD_ARTIST", artist})
    fetch(`http://localhost:3001/users/${artist.eventId}/comments`, configObj)
  }
}

function fetchArtists(eventId){
  return dispatch => {
    dispatch({ type: "LOAD_ARTISTS", eventId })
    fetch(`http://localhost:3001/users/${eventId}/artists`)
      .then(resp => resp.json())
      .then(artists => dispatch({ type: "ADD_COMMENTS", artists }))
  }
}

export const deleteArtist = (artistId, userId) => {

  return (dispatch) => {
      return fetch(`http://localhost:3001/api/v1/users/${userId}/artists/${artistId}`, {
          method: 'DELETE'
      })
      .then(response => response.json())
      .then(user => dispatch({type: 'DELETE_ARTIST', payload: user}))
  }
}

export const editArtist = (artist, userId) => {
  
return (dispatch) => {
    debugger;
    fetch(`http://localhost:3001/api/v1/users/${userId}/artists/${artist.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(artist)
    })
    .then(response => response.json())
    .then(user => dispatch({type: 'EDIT_ARTIST', payload: user}))
}
}

export { addArtist, fetchArtists }