export default function appReducer(state = {users: []}, action) {
  switch(action.type) {
    case 'FETCH_USERS':
      return {users: action.payload}
    case 'ADD_USER':
      return {...state, users: [...state.users, action.payload]}
    case 'ADD_ARTIST':
      return {...state, users: state.users.map(user => {
        if (user.id === action.payload.id) {
          return action.payload
        } else {
          return user
        }
      })}
    case 'DELETE_ARTIST':
      return {...state, users: state.users.map(user => {
        if (user.id === action.payload.id) {
          return action.payload
        } else {
          return user
        }
      })}
    default: 
      return state
  }
}

