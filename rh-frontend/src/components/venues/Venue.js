import React from 'react';
import {connect} from 'react-redux';
import { editVenue } from '../../actions/venueActions'


const Venue = (props) => {

let venue = props.users.filter(ven => ven.id == props.match.params.id)[0]

const handleEdit = (venue) => {
    props.editArtist(venue.id, venue.user_id)
}

    return (
      <div>
        <h1>
            {venue ? venue.name : null}
        </h1>
        <div>
            Genre: {venue.genre}<br/>
            Seen {venue.times_seen} times<br/>
            Met? {venue.met}<br/>
        </div>
        <button onClick={() => handleEdit(venue)}>Edit</button>
      </div>
    )
}
//{user ? null : <Redirect to='/accounts'/>}
export default connect(null, {editVenue})(Venue)