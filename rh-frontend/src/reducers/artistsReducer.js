//import cuid from 'cuid'

function artistsReducer(state = { list: [], loadStatus: null, resourceLoaded: null}, action){
  switch(action.type){
//    case "ADD_ARTIST":
//      const newArtist = {
//        ...action.artist,
//        id: cuid()
//      }
//      return {
//        list: [...state.list, newArtist],
//        loadStatus: state.loadStatus
//      }

//      case "START_ART_ADD":
//        const tempArtist = { 
//          ...action.tempArtist,
//          events: [],
//          users: [],
//          temp: true }
//        return {
//          events: [...state.events, tempEvent],
//          loadStatus: state.loadStatus,
//          EventAdded: null
//        }

      case "ADD_ARTIST":
        const newArtist = {
          ...action.respArtist,
        }
        return {
          list: [...state.list.filter(art => !art.temp), newArtist],
          loadStatus: state.loadStatus,
          artistAdded: action.respArtist
        }

    case "LOAD_ARTISTS":
      return {
        list: [...state.list],
        loadStatus: "pending",
        resourceLoaded: action.eventId
      }
    case "FETCH_ARTISTS":
      return {
        list: [...action.artists],
        loadStatus: "complete",
        eventLoaded: state.eventLoaded
      }
    default: 
      return state 
  }
}

export default artistsReducer