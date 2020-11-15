function eventsReducer(state = {list: [], loadStatus: null, eventAdded: null, artistAdded: null}, action){
  switch(action.type){
    case "START_ADD":
      const tempEvent = { 
        ...action.tempEvent,
        artists: [],
        temp: true }
      return {
        list: [...state.list, tempEvent],
        loadStatus: state.loadStatus,
        eventAdded: null,
        artistAdded: state.artistAdded
      }
    
    case "START_ARTIST_ADD":
      return {
        list: state.list,
        loadStatus: state.loadStatus,
        eventAdded: state.eventAdded,
        artistAdded: null
      }

    case "ADD_EVENT":
      const newEvent = {
        ...action.respEvent,
      }
      return {
        list: [...state.list.filter(evnt => !evnt.temp), newEvent],
        loadStatus: state.loadStatus,
        eventAdded: action.respEvent,
        artistAdded: state.artistAdded
      }
    case "LOAD_EVENTS":
      return {
        list: [...state.list],
        loadStatus: "pending",
        eventAdded: state.eventAdded,
        artistAdded: state.artistAdded
      }
    case "ADD_EVENTS":
      return {
        list: [...action.events],
        loadStatus: "complete",
        eventAdded: state.eventAdded,
        artistAdded: state.artistAdded
      }


    default: 
      return state 
  }
}

export default eventsReducer