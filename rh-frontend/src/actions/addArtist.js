export const addArtist = (artist, userId) => {
    
    return (dispatch) => {
        fetch(`http://localhost:3001/api/v1/users/${userId}/artists`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(artist)
        })
        .then(response => response.json())
        .then(user => dispatch({type: 'ADD_ARTIST', payload: user}))
    }
}