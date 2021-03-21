import { combineReducers } from 'redux'
import eventsReducer from './eventsReducer'
import artistsReducer from './artistsReducer'
import venuesReducer from './venuesReducer'

const rootReducer = combineReducers({
  events: eventsReducer,
  artists: artistsReducer,
  venues: venuesReducer
})

export default rootReducer