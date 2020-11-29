export default function eventsReducer(state = {users: [], events: [], loadStatus: null, eventAdded: null}, action) {
  switch (action.type) {
    case 'FETCH_EVENTS':
      return {events: action.payload}
      case "FETCH_USER_EVENTS":
        return {
          events: [...action.events],
          loadStatus: "complete",
          eventAdded: state.eventAdded
        }

      case "START_ADD":
        const tempEvent = { 
          ...action.tempEvent,
          events: [],
          users: [],
          temp: true }
        return {
          events: [...state.events, tempEvent],
          loadStatus: state.loadStatus,
          eventAdded: null
        }

      case "ADD_EVENT":
        const newEvent = {
          ...action.respEvent,
        }
        return {
          events: [...state.events.filter(evnt => !evnt.temp), newEvent],
          loadStatus: state.loadStatus,
          eventAdded: action.respEvent
        }

    case "LOAD_EVENTS":
        return {
          events: [...state.events],
          loadStatus: "pending",
          eventAdded: state.eventAdded
        }
    case "LOAD_USER_EVENTS":
        return {
            events: [...state.events],
            loadStatus: "pending",
            eventAdded: state.eventAdded
          }
//    case 'DELETE_EVENT':
//     let usersTwo = state.events.map(evnt => {
//       if (evnt.id === action.payload.id) {
//          return action.payload
//        } else {
//          return evnt
//        }
//      })
//      return {...state, events: usersTwo}

      case 'DELETE_EVENT':
        return {...state, events: state.events.map(evnt => {
          debugger;
          if (evnt.id === action.eventId) {
            return action.payload
          } else {
            return evnt
          }
        })}

    case 'EDIT_EVENT':
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