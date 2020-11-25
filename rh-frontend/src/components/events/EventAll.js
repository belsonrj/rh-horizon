import React from 'react'
//import EventThumbnail from './EventThumbnail'

export default class EventAll extends React.Component {
    
    render() {

        return (
            <div>
            {this.props.events.events.map(evnt =>  
            <div className="card-body" key={evnt.id}>  
              <h3 className="card-title">{evnt.name}</h3>
              <p>{evnt.date}</p>
              <p>{evnt.venue}</p>
              <p>{evnt.comments}</p>
              <p>Created by: {evnt.user.username}</p>
            </div> 
            )}
          </div>
        )
      }
    }
