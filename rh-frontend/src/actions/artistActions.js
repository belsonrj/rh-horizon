import * as Cookies from "js-cookie"
//import { browserHistory } from 'react-router';

const token = () => Cookies.get("eventSession")

function addArtist(artist, eventId, userId){
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
      event_id: artist.event_id,
      user_id: artist.user_id
    })
  }

  return dispatch => {
    dispatch({type: "ADD_ARTIST", artist})
    fetch(`http://localhost:3001/api/v1/users/${userId}/events/${eventId}/artists`, configObj)
  }
}

//function fetchArtists(userId){
//  return dispatch => {
//    dispatch({ type: "LOAD_ARTISTS", userId })
//    fetch(`http://localhost:3001/users/${userId}/artists`)
//      .then(resp => resp.json())
//      .then(artists => dispatch({ type: "ADD_ARTISTS", artists }))
//  }
//}

export const fetchArtists = (userId) => {
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
    dispatch({type: 'LOAD_ARTISTS'})
    fetch(`http://localhost:3001/api/v1/users/${userId}/artists`, configObj)
      .then(resp => resp.json())
      .then(artists => {
        dispatch({
          type: 'FETCH_ARTISTS',
          artists
        })
      })
      .catch(() => console.log("Can't access response. Please try again later"))
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

export { addArtist }