export default function eventsReducer(state = {users: [], artists: []}, action) {
    switch (action.type) {
      case 'FETCH_ARTISTS':
        return {artists: action.payload}
case 'ADD_ARTIST':
    let user_artist = state.users.map(user => {
      if (user_artist.current.id === action.payload.id) {
        return action.payload
      } else {
        return user
      }
    })
    return {...state, users: user_artist}
    case 'DELETE_TRANSACTION':
      let usersTwo = state.users.map(user => {
        if (user.current.id === action.payload.id) {
          return action.payload
        } else {
          return user
        }
      })
      return {...state, users: usersTwo}
    case 'EDIT_ACCOUNT':
      let usersThree = state.users.map(user => {
        if (user.current.id === action.payload.id) {
          return action.payload
        } else {
          return user
        }
      })
      return {...state, users: usersThree}
    default:
      return state
  }
}