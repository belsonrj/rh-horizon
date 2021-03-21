
function addArtist(artist, eventId){
  const configObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      name: artist.name,
      genre: artist.genre,
      times_seen: artist.times_seen,
      event_id: artist.event_id
    })
  }

  return dispatch => {
    dispatch({type: "ADD_ARTIST", artist})
    fetch(`http://localhost:3000/api/v1/events/${eventId}/artists`, configObj)
  }
}

export function fetchArtists() {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/artists')
    .then(resp => resp.json())
    .then(art => dispatch({
      type: 'FETCH_ARTISTS',
      payload: art
    }))
  }
}

export const deleteArtist = (artistId) => {

  return (dispatch) => {
      return fetch(`http://localhost:3000/api/v1/artists/${artistId}`, {
          method: 'DELETE'
      })
      .then(response => response.json())
      .then(user => dispatch({type: 'DELETE_ARTIST', payload: user}))
  }
}

export const editArtist = (data, artistId) => {
  debugger;
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/artists/${artistId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(artist => dispatch({type: 'EDIT_ARTIST', payload: artist}))
  }
}


export { addArtist }