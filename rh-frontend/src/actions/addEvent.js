import * as Cookies from "js-cookie"

const token = () => Cookies.get("eventSession")

export const addEvent = (evnt, userId) => {
    
    return (dispatch) => {
      fetch(`http://localhost:3001/api/v1/users/${userId}/events`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: token()
        },
        credentials: 'include',
        body: JSON.stringify(evnt)
      })
      .then(response => response.json())
      .then(user => {
          if (user.error) {
            alert(user.error)
          } else {
            dispatch({type: 'ADD_EVENT', payload: user})
          }
        }
      )
    }
  }