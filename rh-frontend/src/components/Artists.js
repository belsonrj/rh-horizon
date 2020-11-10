import React from 'react';

const Artists = (props) => {
    return (
        <div>
            Artists:
            {props.artitsts && props.artists.map(artist => 
              <li key={artist.id}>
                {artist.name}
              </li>
                )}
        </div>
    )
}

export default Artists