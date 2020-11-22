export default function eventsReducer(state = {users: [], venues: []}, action) {
    switch (action.type) {
      case 'FETCH_VENUES':
        return {venues: action.payload}
case 'ADD_VENUE':
    let user_venue = state.users.map(user => {
      if (user_venue.current.id === action.payload.id) {
        return action.payload
      } else {
        return user
      }
    })
    return {...state, users: user_venue}
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