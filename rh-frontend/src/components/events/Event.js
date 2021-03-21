import React from 'react'
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
import {editEvent} from '../../actions/eventActions'
//import EventEdit from '../../components/events/EventEdit'
import addIcon from '../../assets/add-icon.png'

const Event = (props) => {
  

  console.log(props)
  let evnt = props.events.filter(event => event.id == props.match.params.id)[0]
  
    return(
      <div>

          <div class="add-card">
            <Link className="mx-4" 
            to={{
              pathname: `/events/${evnt.id}/artists/new`,
              context: "events"
            }}>
              <h5>
                <img className="icon" src={addIcon} alt="add button"></img>
                <span className="mx-2 primary-text badge">Add Artist</span>
              </h5>
            </Link>
          </div>
          <div class="add-card">
            <Link className="mx-4" 
            to={{
              pathname: `/events/${evnt.id}/venues/new`,
              context: "events"
            }}>
              <h5>
                <img className="icon" src={addIcon} alt="add button"></img>
                <span className="mx-2 primary-text badge">Add Venue</span>
              </h5>
            </Link>
          </div>
        
      <div class="show-card">
        <h2>What?</h2>
        <h1 className="show-text" >{ evnt.name }</h1>
        <h2>When?</h2>
        <h3 className="show-text">{ evnt.date }</h3>
        <h6>Comments:</h6>
        <p className="show-text">{ evnt.comments }</p>
      </div>
      <div class="show-card">
        <div>
          <h2>Who?</h2>
            {evnt.artists.map(art =>  
            <ul  key={art.id}>  
              <li className="show-text"><Link className="link" to={`/artists/${art.id}`} >{art.name}</Link></li>
            </ul> )}
        </div>
        <div class="show-card">
          <h2>Where?</h2>
            {evnt.venues.map(ven =>  
            <ul  key={ven.id}>  
              <li className="show-text"><Link className="link" to={`/venues/${ven.id}`} >{ven.name}</Link></li>
            </ul> )}
        </div>
  </div>
  </div>
    )
  }


  export default connect(null, {editEvent})(Event)