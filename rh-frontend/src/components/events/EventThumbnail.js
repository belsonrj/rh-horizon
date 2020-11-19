import React from 'react'
import { Link } from 'react-router-dom'

const EventThumbnail = props => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="row justify-content-between">
          <div>
            <h6 className="badge badge-primary badge-pill">{props.event.name}</h6><br/>
            <span className="badge badge-primary badge-pill">Created by: {props.event.user.username}</span>
          </div>
        </div>
      </div>
      <div className="card-body">
        <h6 className="card-title">{props.event.date}</h6>
        <Link className="btn btn-primary tertiary-background" to={`/users/${props.event.user.id}/events/${props.event.id}`} >See More</Link>
      </div>
    </div>
  )
}

export default EventThumbnail