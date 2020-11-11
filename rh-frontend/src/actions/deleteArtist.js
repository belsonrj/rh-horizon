export const deleteArtist = (artistId, userId) => {

    return (dispatch) => {
        return fetch(`http://localhost:3001/api/v1/users/${userId}/artists/${artistId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(user => dispatch({type: 'DELETE_ARTIST', payload: user}))
    }
}