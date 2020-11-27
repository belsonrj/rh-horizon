import React from 'react';
import {connect} from 'react-redux';
import {editArtist} from '../../actions/artistActions'


const Artist = (props) => {
console.log(props)
let artist = props.artists.filter(artist => artist.id == props.match.params.id)[0]

const handleEdit = (artist) => {
    props.editArtist(artist.id, artist.user_id)
}

    return (
      <div>
        <h1>
            {artist ? artist.name : null}
        </h1>
        <div>
            Genre: {artist ? artist.genre : null}<br/>
            Seen: {artist ? artist.times_seen : null} times<br/>
        </div>
        <button onClick={() => handleEdit(artist)}>Edit</button>
      </div>
    )
}
//{user ? null : <Redirect to='/accounts'/>}
export default connect(null, {editArtist})(Artist)