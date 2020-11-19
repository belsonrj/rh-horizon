import React from 'react'
import { Link } from 'react-router-dom'
import EventThumbnail from './EventThumbnail'
import addIcon from '../../assets/add-icon.png'

class Events extends React.Component {
  
  render() {
    return (
    <div>
    <div className="row justify-content-center py-4">
    
    </div>
    <div className="row justify-content-center">
      <Link className="mx-4" to={{
        pathname: `/events/new`,
        context: "events"
      }}>
        <h5>
          <img className="icon" src={addIcon} alt="add button"></img>
          <span className="mx-2 primary-text badge">New Event</span>
        </h5>
      </Link>
    </div>
    <div className="card-columns">
        {this.props.events.events.map(evnt => <EventThumbnail 
          key={evnt.id} 
          event={evnt}
          />
        )}
      </div>
      </div>
    )
  }
}
export default Events