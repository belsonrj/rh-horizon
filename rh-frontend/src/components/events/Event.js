import React from 'react'
import { Link } from 'react-router-dom'
//import ArtistForm from '../../components/artists/ArtistForm'
import addIcon from '../../assets/add-icon.png'

const Event = props => {

console.log(props)
  const event = props.event.filter(evnt => evnt.id == props.match.params.id)[0]
    return(
      <div data-testid="playlist-wrapper">
        <h1 className="my-3">{event ? event.name : null}</h1>
        <h2>When?</h2>
        <h3 className="my-3">{event ? event.date : null}</h3>
        <h2>Where?</h2>
        <h3 className="my-3">{event ? event.venue: null}</h3>
        <h2>Who?</h2><br/>
        <p>Created by: {event.user.username}</p>
      <div>
        <h6>Add Artist to Event</h6>
      <div className="row justify-content-center">
      <Link className="mx-4" event={event} user={event.user}
      to={{
        pathname: `/artists/new`,
        context: "events"

      }}>
        <h5>
          <img className="icon" src={addIcon} alt="add button"></img>
          <span className="mx-2 primary-text badge">Add Artist</span>
        </h5>
      </Link>
    </div>
      </div>
      </div>
    )
  }


export default Event