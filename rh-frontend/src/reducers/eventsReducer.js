export default function eventsReducer(state = {users: [], events: []}, action) {
  switch (action.type) {
    case 'FETCH_EVENTS':
      return {events: action.payload}

    case 'ADD_EVENTS':
      let users = state.users.map(user => {
        if (users.current.id === action.payload.id) {
          return action.payload
        } else {
          return user
        }
      })
      return {...state, users: users}
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