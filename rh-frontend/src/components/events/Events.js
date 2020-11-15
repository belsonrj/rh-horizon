import React from 'react'
import { Link } from 'react-router-dom'
//import EventThumbnail from './EventThumbnail'
import addIcon from '../../assets/add-icon.png'

const Events = (props) => (
  <>
    <div className="row justify-content-center py-4">
    <h3>{props.user.valid ? `${props.user.current.username}'s Events` : "Your Events"}</h3>
    </div>
    <div className="row justify-content-center">
      <Link className="mx-4" to={{
        pathname: `${props.match.path}/new`,
        context: "events"
      }}>
        <h5>
          <img className="icon" src={addIcon} alt="add button"></img>
          <span className="mx-2 primary-text badge">New Event</span>
        </h5>
      </Link>
    </div>
    <div className="row justify-content-center">
      {props.events.map(evnt => 
        <Link key={evnt.id} to={`/events/${evnt.id}`}>
          <div className="card mx-2">
            <div className="card-header">
              <h6 className="primary-text">{evnt.name}</h6>
            </div>
          </div>
        </Link>
      )}
    </div>
  </>
)

export default Events