import React from 'react'
import { Link } from 'react-router-dom'
//import EventThumbnail from './EventThumbnail'
import addIcon from '../../assets/add-icon.png'

class Events extends React.Component {
  
  render() {
    console.log(this.props)
    //debugger;
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
    <div>
    {this.props.events && this.props.events.map(event =>
    <div className="card" key={event.id}> 
      <div className="card-header">
        <div className="row justify-content-between">
          <div>
            <h3 className="badge badge-primary badge-pill">{event.name}</h3><br/>
            <img className="card-img" src={event.url}alt="No Pic Uploaded"/><br/>
            <div className="card-body">
              <h6 className="card-title">{event.date}</h6>
                <Link className="btn btn-primary tertiary-background" to={`/events/${event.id}`} event={event}>See More</Link><br/>
                <Link className="btn btn-primary tertiary-background" to={`/events/${event.id}/edit`} event={event}>Edit Event</Link><br/>
                <button onClick={() => this.props.handleDelete(event.id)}>Delete</button>
            </div> 
          </div>
        </div>
      </div>
    </div>
    )}
    </div>
    </div>
  )
}
}
export default Events