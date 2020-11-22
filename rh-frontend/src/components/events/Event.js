import React from 'react'
//import ResourceThumbnail from '../../resources/ResourceThumbnail'

const Event = props => {

  console.log(props)
  let event = props.events.events.filter(evnt => evnt.id == props.match.params.id)[0]
    return(
      <div data-testid="playlist-wrapper">
        <h1 className="my-3">{event ? event.name : null}</h1>
        <h3 className="my-3">{event ? event.date : null}</h3>
        <p>Created by: {event.user.username}</p>
      </div>
    )
  }


export default Event