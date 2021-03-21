import React from 'react'
import { Link } from 'react-router-dom'

export default class EventAll extends React.Component {
    
    render() {
      console.log(this.props)
        return (
          <div>
            {this.props.events.events.map(evnt =>  
            <div className="event-card" key={evnt.id}>  
              <h3 className="card-title">{evnt.name}</h3>
              <p>{evnt.date}</p>
              <p>{evnt.venue}</p>
              <p>{evnt.comments}</p>
              <p>Artist(s):</p>
              {evnt.artists.map(art =>  
              <ul  key={art.id}>  
                <li className="show-text"><Link className="link" to={`/artists/${art.id}`} >{art.name}</Link></li>
              </ul> )}
              <p>Venue(s):</p>
              {evnt.venues.map(ven =>  
              <ul  key={ven.id}>  
                <li className="show-text"><Link className="link" to={`/artists/${ven.id}`}>{ven.name}</Link></li>
              </ul> )}
            </div> 
            )}
          </div>
        )
      }
    }
