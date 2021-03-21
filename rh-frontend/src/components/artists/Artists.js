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
        <div class="view-card">
          <h1>Your Artist Collection:</h1>
            <ol>
            {props.artists && props.artists.map(artist => 
              <li key={artist.id}>
                <Link className="link" to={`/artists/${artist.id}`}>{artist.name}</Link><br/> 
                    <button className="button" onClick={() => handleDelete(artist)} >Delete </button> |
                    <Link to={`/artists/${artist.id}/edit`} > Edit</Link><br/>
              </li>
                )}
            </ol>
        </div>
        <div class="view-card">
            <h1>Most seen artists:</h1>
            <ol>
              {props.artists.sort((a, b) => b.times_seen - a.times_seen).map(
              (item, i) => <li key={i}>{item.name} <p>{item.times_seen} time(s)</p></li>
                )}
            </ol>
        </div>
      </div>
    )
}

export default connect(null, {deleteArtist})(Artists)