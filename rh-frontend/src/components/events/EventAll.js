import React from 'react'
import EventThumbnail from './EventThumbnail'

export default class EventAll extends React.Component {
    
    render() {

        return (
            <div className="card-columns">
            {this.props.events.events.map(evnt => <EventThumbnail 
              key={evnt.id} 
              event={evnt}
              />
            )}
          </div>
        )
      }
    }
