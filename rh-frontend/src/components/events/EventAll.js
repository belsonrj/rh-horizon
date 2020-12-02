import React from 'react'

export default class EventAll extends React.Component {
    
    render() {
      console.log(this.props)
      //debugger;
        return (
            <div>
            {this.props.events.events.map(evnt =>  
            <div className="show-card" key={evnt.id}>  
              <h3 className="card-title">{evnt.name}</h3>
              <p>{evnt.date}</p>
              <p>{evnt.venue}</p>
              <p>{evnt.comments}</p>
              <p>Artists:</p>
            {evnt.artists.map(art =>  
            <div  key={art.id}>  
              <li className="show-text">{art.name} - {art.genre}</li>
              ---------------------------
            </div> )}
            </div> 
            )}
          </div>
        )
      }
    }
