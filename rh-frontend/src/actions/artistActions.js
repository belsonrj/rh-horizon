import * as Cookies from "js-cookie"

const token = () => Cookies.get("eventSession")

export const addArtist = (art, userId) => {
    
    return (dispatch) => {
      fetch(`http://localhost:3001/api/v1/users/${userId}/artists`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: token()
        },
        credentials: 'include',
        body: JSON.stringify(art)
      })
      .then(response => response.json())
      .then(user => {
          if (user.error) {
            alert(user.error)
          } else {
            dispatch({type: 'ADD_ARTIST', payload: user})
          }
        }
      )
    }
  }

  export const fetchArtists = user => {
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
      fetch(`http://localhost:3001/api/v1/users/${user.id}/artists`, configObj)
        .then(resp => resp.json())
        .then(artists => {
          dispatch({
            type: 'FETCH_ARTISTS',
            paylod: artists
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