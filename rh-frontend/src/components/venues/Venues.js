import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {deleteVenue} from '../../actions/venueActions';
//import Artist from '../components/Artist';

const Venues = (props) => {
console.log(props)

const handleDelete = (venue) => {
    props.deleteVenue(venue.id)
}

    return (
      <div>
        <div class="view-card">
          <h1>Your Venue Collection:</h1>
            <ol>
            {props.venues && props.venues.map(venue => 
              <li key={venue.id}>
                <Link className="link" to={`/venues/${venue.id}`} > {venue.name}</Link><br/> 
                    <button className="button" onClick={() => handleDelete(venue)} >Delete </button> |
                    <Link to={`/venues/${venue.id}/edit`} > Edit</Link><br/>
              </li>
              )}
            </ol>
        </div>
        <div class="view-card">
            <h1>Top Visited:</h1>
            <ol>
              {props.venues.sort((a, b) => b.times_visited - a.times_visited).map(
              (item, i) => <li key={i}>{item.name} <p>{item.times_visited} time(s)</p></li>
                )}
            </ol>
        </div>
      </div>
    )
}

export default connect(null, {deleteVenue})(Venues)