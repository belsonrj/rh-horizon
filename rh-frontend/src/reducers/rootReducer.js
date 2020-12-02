import { combineReducers } from 'redux'
import eventsReducer from './eventsReducer'
import artistsReducer from './artistsReducer'

const rootReducer = combineReducers({
  events: eventsReducer,
  artists: artistsReducer
})

export default rootReducer