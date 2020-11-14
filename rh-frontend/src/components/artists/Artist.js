import React from 'react';
import {connect} from 'react-redux';
import ArtistEdit from '../ArtistEdit'


const Artist = (props) => {

let artist = props.users.filter(artist => artist.id == props.match.params.id)[0]

const handleEdit = (artist) => {
    props.editArtist(artist.id, artist.user_id)
}

    return (
      <div>
        <h1>
            {artist ? artist.name : null}
        </h1>
        <div>
            Genre: {artist.genre}<br/>
            Seen {artist.times_seen} times<br/>
            Met? {artist.met}<br/>
        </div>
        <button onClick={() => handleEdit(artist)}>Edit</button>
      </div>
    )
}
//{user ? null : <Redirect to='/accounts'/>}
export default connect(null, {ArtistEdit})(Artist)