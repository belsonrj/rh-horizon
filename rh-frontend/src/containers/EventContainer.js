import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { addEvent, fetchEvents } from '../actions/eventActions'
import { authorizeUser, loginUser } from '../actions/userActions'
import { findEvent } from '../utilities'
import EventForm from '../components/events/EventForm'
import Events from '../components/events/Events'
import Event from '../components/events/Event'
import ModalWrapper from '../components/ModalWrapper'
//import NavBar from '../components/NavBar'
//import UserContainer from './UserContainer'

class EventContainer extends React.Component {
  componentDidMount(){
    if (!this.props.loadStatus){
      this.props.fetchEvents()
    }
    this.props.authorizeUser()
  }

  //componentDidUpdate(prevProps){
  //  if (prevProps.user.valid !== this.props.user.valid){
  //    this.props.fetchPlaylists()
  //  }
  //}

  render(){
    return(
      <div>
        <Switch>
          <Route exact path={`${this.props.match.path}/new`}>
            
              <ModalWrapper title="Add Event" id="add-resource-form" previousUrl={this.props.match.url}>
                <EventForm
                  addEvent={this.props.addEvent} 
                  events={this.props.events} 
                />
              </ModalWrapper>
            
            
          </Route> 
          <Route path={`${this.props.match.path}/:id`} render={props =>
            <Event
              {...props} 
              evnt={findEvent.call(this, props.match.params.id)} 
              loadStatus={this.props.loadStatus}
            />
          } />
          <Route path={`${this.props.match.path}`}>
            <Events 
              events={this.props.events}
            />
          </Route> 
        </Switch>
        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  events: state.events.list,
  loadStatus: state.events.loadStatus
})

const mapDispatchToProps = {
  addEvent, 
  fetchEvents, 
  loginUser, 
  authorizeUser
}

export default connect(mapStateToProps, mapDispatchToProps)(EventContainer)