import React from 'react'
import { Link } from 'react-router-dom'
//import ArtistForm from '../../components/artists/ArtistForm'
import addIcon from '../../assets/add-icon.png'

const Event = (props) => {
  

  console.log(props)
  let evnt = props.events.filter(artist => artist.id == props.match.params.id)[0]
  //debugger;
    return(
      <div className="show-card">
        <div className="float-right">
          <h2>Who?</h2><br/>
            {evnt.artists.map(art =>  
            <div  key={art.id}>  
              <li className="show-text">{art.name} - {art.genre}</li>
              ---------------------------
            </div> )}
        </div>
        <h2>What?</h2>
        <h1 className="show-text" >{ evnt.name }</h1>
        <h2>When?</h2>
        <h3 className="show-text">{ evnt.date }</h3>
        <h2>Where?</h2>
        <h3 className="show-text">{ evnt.venue }</h3>
      
        <p className="show-text">Created by: { evnt.user.username }</p>
      <div>
      <div className="row justify-content-center">
      <Link className="mx-4" 
      to={{
        pathname: `/events/${evnt.id}/artists/new`,
        context: "events"
      }}>
        <h5>
          <img className="icon" src={addIcon} alt="add button"></img>
          <span className="mx-2 primary-text badge">Add Artist</span>
        </h5>
      </Link>
    </div>
      </div>
      </div>
    )
  }


export default Event