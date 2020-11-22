import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { fetchUserEvents } from '../actions/eventActions'
import {addEvent} from '../actions/eventActions'
import { authorizeUser, loginUser } from '../actions/userActions'
//import { findEvent } from '../utilities'
import EventForm from '../components/events/EventForm'
import ArtistForm from '../components/artists/ArtistForm'
import VenueForm from '../components/venues/VenueForm'
import Events from '../components/events/Events'
import Event from '../components/events/Event'
//import ModalWrapper from '../components/ModalWrapper'
//import NavBar from '../components/NavBar'

class EventContainer extends React.Component {

  
//  componentDidMount(){
//    this.props.authorizeUser()
//    this.props.fetchUserEvents(this.props.user.current.id)    
//  }

  componentDidMount(){
    if (!this.props.loadStatus){
    }
//    this.props.fetchUserEvents(this.props.user.current.id)
    this.props.authorizeUser()
  }

  componentDidUpdate(prevProps){
    if (prevProps.user.valid !== this.props.user.valid){
      this.props.fetchUserEvents(this.props.user.current.id)
    }
  }

  findEvent = id => {
    return this.props.user.events.find(event => event.id === parseInt(id,10))
  }

  render(){
    let events = this.props.events
      return (
          <div>          
            <Switch>
              <Route path='/events/new' render={(routerProps) => <EventForm {...routerProps} user={this.props.user.current}/>}/>
              <Route path='/artists/new' render={(routerProps) => <ArtistForm {...routerProps} user={this.props.user.current}/>}/>
              <Route path='/venues/new' render={(routerProps) => <VenueForm {...routerProps} user={this.props.user.current}/>}/>
              <Route path='/events/:id' render={(routerProps) => <Event {...routerProps} events={this.props.events}/>}/>
            </Switch>
            <h3>{`${this.props.user.current.username}'s Events:`}</h3> 
            <Events events={events}/>
         </div>
      )
  }
}
      
    
  


const mapStateToProps = state => ({
  user: state.user,
  events: state.events,
  loadStatus: state.events.loadStatus
})

const mapDispatchToProps = { 
  loginUser, 
  authorizeUser,
  fetchUserEvents, 
  addEvent
}

export default connect(mapStateToProps, mapDispatchToProps)(EventContainer)