import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import {addEvent, deleteEvent, fetchUserEvents} from '../actions/eventActions'
import { authorizeUser, loginUser } from '../actions/userActions'
//import { findEvent } from '../utilities'
import EventForm from '../components/events/EventForm'
import ArtistForm from '../components/artists/ArtistForm'
import Events from '../components/events/Events'
import Event from '../components/events/Event'
import ModalWrapper from '../components/ModalWrapper'
//import NavBar from '../components/NavBar'

class EventContainer extends React.Component {

  state = {
    loading: true,
    events: [],
    user: [this.props.user]
  }
  
  componentDidMount(){
    if (!this.props.loadStatus){
    }
    this.props.authorizeUser()
    this.props.fetchUserEvents(this.props.user.current.id)
    this.setState({ loading: false });
  }

  componentDidUpdate(prevProps){
    if (prevProps.user.valid !== this.props.user.valid){
      this.props.fetchUserEvents(this.props.user.current.id)
    }
  }

  handleDelete = (evnt) => {
    this.props.deleteEvent(evnt.id, evnt.user.id)
    const currentEvents = this.state.events;
    this.setState({
      events: currentEvents.filter(event => event.id !== evnt.id),
    });
    
  }

//  findEvent = id => {
//    return this.props.user.events.find(event => event.id === parseInt(id,10))
//  }

  render(){
    if (this.state.loading) {
      return "Please Wait";
  }
    let events = this.props.events
      return (
          <div>          
            <Switch>
              <Route exact path={`${this.props.match.path}/new`}>
              <>
                <ModalWrapper title="Add Event" id="add-resource-form" previousUrl={this.props.match.url}>
                  <EventForm 
                    user={this.props.user.current} 
                    events={this.props.events} 
                  />
                </ModalWrapper>
                </>
              </Route> 
              <Route path='/artists/new' render={(routerProps) => <ArtistForm {...routerProps} user={this.props.user.current}/>}/>      
              <Route path={`${this.props.match.path}/:id`} render={props =>
                <Event
                  {...props} 
                  event={this.props.events.events} 
                  loadStatus={this.props.loadStatus}
             />
             }/>
            </Switch>
            <h3>{`${this.props.user.current.username}'s Events:`}</h3> 
            <Events events={events} user={this.props.user} handleDelete={this.handleDelete}/>
            
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
  addEvent,
  deleteEvent
}

export default connect(mapStateToProps, mapDispatchToProps)(EventContainer)