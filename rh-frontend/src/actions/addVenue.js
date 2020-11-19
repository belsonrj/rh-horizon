export const addVenue = (venue, userId) => {
    
    return (dispatch) => {
        fetch(`http://localhost:3001/api/v1/users/${userId}/venues`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(venue)
        })
        .then(response => response.json())
        .then(user => dispatch({type: 'ADD_VENUE', payload: user}))
    }
}