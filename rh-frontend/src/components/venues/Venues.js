import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {deleteVenue} from '../../actions/venueActions';
//import Artist from '../components/Artist';

const Venues = (props) => {

const handleDelete = (venue) => {
    props.deleteVenue(venue.id, venue.user_id)
}

    return (
        <div>
            Venues:
            {props.venues && props.venues.map(venue => 
              <li key={venue.id}>
                <Link to={`/users/${venue.user_id}/artists/${venue.id}`}> {venue.name}</Link> 
                    <button onClick={() => handleDelete(venue)}>Delete</button>
              </li>
                )}
        </div>
    )
}

export default connect(null, {deleteVenue})(Venues)