function artistsReducer(state = { artists: []}, action){
  switch(action.type){
    case 'FETCH_ARTISTS':
      return {artists: action.payload}
    case 'ADD_ARTIST':
        return {...state, artists: [...state.artists, action.payload]}
    case 'EDIT_ARTIST':
      let artistsThree = state.artists.map(art => {
      if (art.id === action.payload.id) {
        return action.payload
      } else {
        return art
      }
    })
        return {...state, artists: artistsThree}
    case "DELETE_ARTIST":
      const removalIndex = state.artists.findIndex(art => art.id === action.payload.id);
      return (
        {...state,
        artists: [
          ...state.artists.slice(0, removalIndex),
          ...state.artists.slice(removalIndex + 1)
        ]
    }
  )
    default: 
      return state 
  }
}

export default artistsReducer