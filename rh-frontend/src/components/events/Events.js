import React from 'react'
import { Link } from 'react-router-dom'
import addIcon from '../../assets/add-icon.png'
import Like from './Like'

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
        <h3>
          <img className="icon" src={addIcon} alt="add button"></img>
          <span className="mx-2 primary-text badge">Create New Event</span>
        </h3>
      </Link>
    </div>
    <div>
    {this.props.events && this.props.events.map(event =>
    <div className="card" key={event.id}> 
      <div className="card-header">
        <div className="row justify-content-between">
          <div>
            <h1 className="badge badge-primary badge-pill">{event.name}</h1><br/>
            <img className="card-img" src={event.url}alt="No Pic Uploaded"/>
            <div className="card-body">
              <p>{event.date}</p>
                <span>
                  <Link className="btn btn-primary tertiary-background" to={`/events/${event.id}`} event={event}>View</Link>
                  <Link className="btn btn-primary tertiary-background" to={`/events/${event.id}/edit`} event={event}>Edit</Link>
                  </span><br /><br />
                <div>
                  <button onClick={() => this.props.handleDelete(event.id)}>Delete Event</button>
                </div>
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