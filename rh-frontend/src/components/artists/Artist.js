import React from 'react';
import {connect} from 'react-redux';
import {editArtist} from '../../actions/artistActions'
import ArtistEdit from '../../components/artists/ArtistEdit'


const Artist = (props) => {
console.log(props)
let artist = props.artists.filter(artist => artist.id == props.match.params.id)[0]

    return (
      <div>
        <h1>
            {artist ? artist.name : null}
        </h1>
        <div>
            Genre: {artist ? artist.genre : null}<br/>
            Seen: {artist ? artist.times_seen : null} time(s)<br/>
        </div>
        <div>
          <h3>Your Events with this artist:</h3>
            {artist.events.map(evnt =>  
            <div key={evnt.id}>
              <li className="show-text">{evnt ? evnt.name : null} - {evnt ? evnt.date : null}</li>
            </div> )}
        </div>
      </div>
    )
}
//{user ? null : <Redirect to='/accounts'/>}
export default connect(null, {editArtist})(Artist)