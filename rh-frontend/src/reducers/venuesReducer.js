function venuesReducer(state = { venues: []}, action){
    switch(action.type){
      case 'FETCH_VENUES':
        return {venues: action.payload}
      case 'ADD_VENUE':
          return {...state, venues: [...state.venues, action.payload]}
      case 'EDIT_VENUE':
        let venuesThree = state.venues.map(ven => {
        if (ven.id === action.payload.id) {
          return action.payload
        } else {
          return ven
        }
      })
          return {...state, venues: venuesThree}
      case "DELETE_VENUE":
        const removalIndex = state.venues.findIndex(ven => ven.id === action.payload.id);
        return (
          {...state,
          venues: [
            ...state.venues.slice(0, removalIndex),
            ...state.venues.slice(removalIndex + 1)
          ]
      }
    )
      default: 
        return state 
    }
  }
  
  export default venuesReducer