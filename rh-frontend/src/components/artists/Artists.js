import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {deleteArtist} from '../../actions/artistActions';
//import Artist from '../components/Artist';

const Artists = (props) => {
console.log(props)

const handleDelete = (artist) => {
    props.deleteArtist(artist.id)
}

    return (
        <div>
          <h1>Your Artist Collection:</h1>
            <ol>
            {props.artists && props.artists.map(artist => 
              <li key={artist.id}>
                <Link className="link" to={`/artists/${artist.id}`} > {artist.name}</Link><br/> 
                    <button className="button" onClick={() => handleDelete(artist)} >Delete</button>
                    <Link to={`/artists/${artist.id}/edit`} >Edit</Link><br/>
              </li>
                )}
            </ol>
        </div>
        
    )
}

export default connect(null, {deleteArtist})(Artists)