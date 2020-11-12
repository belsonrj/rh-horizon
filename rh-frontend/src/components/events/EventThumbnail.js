import React from 'react'
import { Link } from 'react-router-dom'

const EventThumbnail = props => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="row justify-content-between">
          <div>
            <span className="badge badge-primary badge-pill">{props.event.date}</span> 
          </div>
        </div>
      </div>
      <div className="card-body">
        <h4 className="card-title">{props.event.date}</h4>
        <Link className="btn btn-primary tertiary-background" to={`/events/${props.event.id}`}>See More</Link>
      </div>
    </div>
  )
}

export default EventThumbnail