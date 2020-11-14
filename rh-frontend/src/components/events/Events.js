import React from 'react'
import { Link } from 'react-router-dom'
import EventThumbnail from './EventThumbnail'
import addIcon from '../../assets/add-icon.png'

const Events = props => {
    
  return (
    <>
      <Link to={`/events/new`}>
        <h5 className="my-3">
          <img className="icon" src={addIcon} alt="add button"></img>
          <span className="mx-2 primary-text badge">Add Event</span>
        </h5>
      </Link>
      <div className="card-columns">
        {props.events.map(event => <EventThumbnail 
          key={event.id} 
          event={event}
          />
        )}
      </div>
   </>
  )
}

export default Events