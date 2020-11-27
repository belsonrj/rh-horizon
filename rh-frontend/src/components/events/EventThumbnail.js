import React from 'react'
import { Link } from 'react-router-dom'

const EventThumbnail = props => {


  console.log(props)
  return (
    <div className="card">
      <div className="card-header">
        <div className="row justify-content-between">
          <div>
            <h6 className="badge badge-primary badge-pill">{props.event.name}</h6><br/>
            <img className="card-img" src={props.event.url}alt="No Pic Uploaded"/>
            <span className="badge badge-primary badge-pill">Created by: {props.event.user.username}</span>
          </div>
        </div>
      </div>
      <div className="card-body">
        <h6 className="card-title">{props.event.date}</h6>
        <Link className="btn btn-primary tertiary-background" to={`/events/${props.event.id}`} >See More</Link>
  <button onClick={() => props.handleDelete(props.event)}>Delete</button>
      </div>
    </div>
  )
}

EventThumbnail.defaultProps = {
  url: ''
}

export default EventThumbnail