import { combineReducers } from 'redux'
import eventsReducer from './eventsReducer'
import usersReducer from './usersReducer'
import artistsReducer from './artistsReducer'
import venuesReducer from './venuesReducer'

const rootReducer = combineReducers({
  events: eventsReducer,
  user: usersReducer,
  artists: artistsReducer,
  venues: venuesReducer
})

export default rootReducer