import cuid from 'cuid'

function eventsReducer(state = {list: [], loadStatus:null}, action){
  switch(action.type){
    case "ADD_EVENT":
      const newEvent = {
        ...action.event,
        id: cuid(),
        rating: 0
      }
      return {
        list: [...state.list, newEvent],
        loadStatus: state.loadStatus
      }
    case "ADD_EVENTS":
      return {
        list: [...state.list, ...action.events],
        loadStatus: "complete",
      }
    case "LOAD_EVENTS":
      return {
        list: [...state.list],
        loadStatus: "pending"
      }
    case 'FETCH_EVENTS':
      return {
        list: [...state.list],
        loadStatus: "pending"
      }
    default:
      return state
  }
}

export default eventsReducer