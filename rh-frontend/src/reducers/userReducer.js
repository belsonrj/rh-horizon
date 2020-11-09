export default function userReducer(state = {users: []}, action) {
  switch(action.type) {
    case 'FETCH_USERS':
      return {users: action.payload}
    case 'FETCH_USER':
      return {...state, users: [...state.users, action.payload]}
    default: 
      return state
  }
}