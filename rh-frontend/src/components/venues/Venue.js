import React from 'react';
import {connect} from 'react-redux';
import {editVenue} from '../../actions/venueActions'
import {Link} from 'react-router-dom';

const Venue = (props) => {
console.log(props)
let venue = props.venues.filter(ven => ven.id == props.match.params.id)[0]

    return (
      <div>
        <h1>
            {venue ? venue.name : null}
        </h1>
        <div>
            Address: {venue ? venue.address : null}<br/>
            Venue Type: {venue ? venue.venue_type : null}<br/>
            Visited: {venue ? venue.times_visited : null} time(s)<br/>
        </div>
        <div>
          <h3>Your Events with this venue:</h3>
            {venue.events.map(evnt =>  
            <ol key={evnt.id}>
                <li className="show-text"><Link className="link" to={`/events/${evnt.id}`}>{evnt.name}</Link>
                  <p>{evnt.date}</p>
                </li>
            </ol> )}
        </div>
      </div>
    )
}

export default connect(null, {editVenue})(Venue)