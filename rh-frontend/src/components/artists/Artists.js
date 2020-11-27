import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {deleteArtist} from '../../actions/artistActions';
//import Artist from '../components/Artist';

const Artists = (props) => {
console.log(props)

const handleDelete = (artist) => {
    props.deleteArtist(artist.id, props.user.current.id)
}

    return (
        <div>
            Artists:
            {props.artists && props.artists.map(artist => 
              <li key={artist.id}>
                <Link to={`/artists/${artist.id}`} > {artist.name}</Link> 
                    <button onClick={() => handleDelete(artist)}>Delete</button>
              </li>
                )}
        </div>
        
    )
}

export default connect(null, {deleteArtist})(Artists)