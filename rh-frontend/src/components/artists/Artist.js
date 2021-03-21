import React from 'react';
import {connect} from 'react-redux';
import {editArtist} from '../../actions/artistActions'
import {Link} from 'react-router-dom';

const Artist = (props) => {
console.log(props)
let artist = props.artists.filter(art => art.id == props.match.params.id)[0]

    return (
      <div>
        <h1>
            {artist ? artist.name : null}
        </h1>
        <div>
            <p>Genre: {artist ? artist.genre : null}</p>
            <p>Seen: {artist ? artist.times_seen : null} time(s)</p>
        </div>
        <div>
          <h3>Your Events with this artist:</h3>
            {artist.events.map(evnt =>  
            <ol key={evnt.id}>
              <li className="show-text"><Link className="link" to={`/events/${evnt.id}`}>{evnt.name}</Link><p>{evnt.date}</p></li>
            </ol> )}
        </div>
      </div>
    )
}
//{user ? null : <Redirect to='/accounts'/>}
export default connect(null, {editArtist})(Artist)