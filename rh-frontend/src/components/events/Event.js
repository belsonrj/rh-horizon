import React from 'react'
//import ResourceThumbnail from '../../resources/ResourceThumbnail'

const Event = props => {

    return(
      <div data-testid="playlist-wrapper">
        <h2 className="my-3">{props.event.name}</h2>
      </div>
    )
  }


export default Event