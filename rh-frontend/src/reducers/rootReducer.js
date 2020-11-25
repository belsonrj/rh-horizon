import { combineReducers } from 'redux'
import eventsReducer from './eventsReducer'
import usersReducer from './usersReducer'
import artistsReducer from './artistsReducer'

const rootReducer = combineReducers({
  events: eventsReducer,
  user: usersReducer,
  artists: artistsReducer
})

export default rootReducer