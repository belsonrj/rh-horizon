export default function accountReducer(state = {events: []}, action) {
  switch (action.type) {
    case 'FETCH_EVENTS':
      return {events: action.payload}
    case 'ADD_EVENT':
      return {...state, events: [...state.events, action.payload]}

    case 'EDIT_EVENT':
      let eventsThree = state.events.map(event => {
        if (event.id === action.payload.id) {
          return action.payload
        } else {
          return event
        }
      })
      return {...state, events: eventsThree}
      case "DELETE_EVENT":
        const removalIndex = state.events.findIndex(evnt => evnt.id === action.payload.id);
        return (
          {...state,
              events: [
                ...state.events.slice(0, removalIndex),
                ...state.events.slice(removalIndex + 1)
              ]
          }
        )
//      case 'DELETE_EVENT':
//        let eventsFour = state.events.map(event => {
//          if (event.id === action.payload.id) {
//            return action.payload
//         } else {
//            return event
//          }
//        })
//        return {...state, events: eventsFour}
    default:
      return state
  }
}