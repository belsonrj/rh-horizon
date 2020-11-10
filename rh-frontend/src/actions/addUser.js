export const addUser = (data) => {
    return (dispatch) => {
        fetch('http://localhost:3001/api/v1/users', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(users => dispatch({type: 'ADD_USER', payload: users}))
    }
}