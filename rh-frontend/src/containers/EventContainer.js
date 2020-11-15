import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { addEvent, fetchEvents } from '../actions/eventActions'
import { authorizeUser, loginUser } from '../actions/userActions'
//import { findEvent } from '../utilities'
import EventForm from '../components/events/EventForm'
import Events from '../components/events/Events'
import Event from '../components/events/Event'
import ModalWrapper from '../components/ModalWrapper'
//import NavBar from '../components/NavBar'
import UserContainer from './UserContainer'

class EventContainer extends React.Component {
  
  componentDidMount(){
    this.props.fetchEvents()
    this.props.authorizeUser()
  }

  findEvent = id => {
    return this.props.events.find(event => event.id === parseInt(id,10))
  }

  render(){
    return(
      <div>
        <Switch>
          <Route path={`${this.props.match.path}/new`} render={props => {
            if (this.props.user.valid){ 
              return(
                <>
                  <ModalWrapper title="Add Event" id="playlist-add-form" previousUrl="/events">
                    <EventForm
                      {...props}
                      addEvent={this.props.addEvent}
                      clearState={{name: ""}}
                    />
                  </ModalWrapper>
                  <Events 
                      events={this.props.events}
                      user={this.props.user}
                      match={{path: "events"}}
                  />
                </>
              ) 
            } else {
              return (
                <>
                  <UserContainer previousUrl={this.props.match.url}/>
                  <Events 
                      events={this.props.events}
                      user={this.props.user}
                      match={{path: "events"}}
                  />
                </>
              )
            }
          }}/>
          <Route path={`${this.props.match.path}/:id`} render={props => 
            <Event 
              {...props}
              event={this.findEvent(props.match.params.id)}
              loadStatus={this.props.loadStatus}
              //removeArtistFromEvent={this.props.removeArtistFromEvent}
              //isArtistInEvent={artistId => isArtistInEvent.call(this, artistId)}
            />          
          }/>
          <Route path={`${this.props.match.path}`} render={props => 
            <Events {...props} events={this.props.events} user={this.props.user}/>          
          }/>
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