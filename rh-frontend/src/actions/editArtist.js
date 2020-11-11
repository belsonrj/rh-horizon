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