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

class EventContainer extends React.PureComponent {
  constructor(props) {
    super(props);

  this.state = {
    events: null,
    user: [this.props.user]
  };
}
  
  componentDidMount(){
    if (!this.props.loadStatus){
    }
    this.props.authorizeUser()
    this.setState({
      events: this.props.fetchUserEvents(this.props.user.current.id)
    })
  }

  componentDidUpdate(prevProps){
    if (prevProps.user.current.valid !== this.state.user.valid){
      this.setState({
        events: this.props.fetchUserEvents(this.props.user.current.id)
      })
    }
  }


  handleDelete = (evnt) => {
    this.props.deleteEvent(evnt.id, evnt.user.id)
//    this.filterState(evnt.id)
  }

//  filterState = evnt => {
//    const currentEvents = this.props.events;
//    this.setState({ state: this.state });
//   currentEvents.filter(event => event.id !== evnt.id) 
//    return this.setState(currentEvents)
//  }

 findEvent = (id) => {
    this.props.events.find(evnt => evnt.id === parseInt(id, 10))
  }

  render(){
    if (this.props.loadStatus === "pending") {
      return "loading"
    } else {
      console.log(this.state)
      return (
        
          <div>          
            <Switch>
              <Route path={`${this.props.match.path}/new`}>
              <>
                <ModalWrapper title="Add Event" id="add-resource-form" previousUrl={this.props.match.url}>
                  <EventForm 
                    user={this.props.user.current} 
                    events={this.props.events} 
                  />
                </ModalWrapper>
                </>
              </Route> 
              <Route path='/artists/new' >
                <>
                <ModalWrapper title="Add Artist" id="add-resource-form" previousUrl={this.props.match.url}>   
                  <ArtistForm 
                    user={this.props.user.current}
                    event={this.props.events} 
                    filterEvent={this.filterEvent}/>
                </ModalWrapper> 
                </>
              </Route>
              
              <Route path={`${this.props.match.path}/:id`} render={props => 
                <>
                <ModalWrapper title="Show Event" id="add-resource-form" previousUrl={this.props.match.url}>
                  <Event 
                    {...props}
                    event={this.findEvent(this.props.match.params.id)}
                    user={this.props.user.current} 
                    events={this.props.events} 
                  />
                </ModalWrapper> 
                </>
              }/>
              
            </Switch>
            <h3>{`${this.props.user.current.username}'s Events:`}</h3> 
            <Events events={this.props.events} user={this.props.user} handleDelete={this.handleDelete}/>
         </div>
      )
  }
}
}

const mapDispatchToProps = {
    loginUser,
    authorizeUser,
    fetchUserEvents,
    addEvent,
    deleteEvent
  }


function mapStateToProps (state) {
    return {
      events: state.events.events,
      user: state.user,
      loadStatus: state.events.loadStatus
}
}
export default connect(mapStateToProps, mapDispatchToProps)(EventContainer)