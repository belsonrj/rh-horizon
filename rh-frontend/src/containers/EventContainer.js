import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import {addEvent, deleteEvent, fetchEvents} from '../actions/eventActions'
//import { findEvent } from '../utilities'
import EventForm from '../components/events/EventForm'
import ArtistForm from '../components/artists/ArtistForm'
import VenueForm from '../components/venues/VenueForm'
import Events from '../components/events/Events'
import Event from '../components/events/Event'
import EventEdit from '../components/events/EventEdit'
import ModalWrapper from '../components/ModalWrapper'

class EventContainer extends React.PureComponent {


  handleDelete = (eventId) => {
    this.props.deleteEvent(eventId)
  }

 findEvent = (id) => {
    this.props.events.find(evnt => evnt.id === parseInt(id, 10))
  }

//  componentDidUpdate(prevProps) {
//    if (prevProps.events !== this.props.events) {
//      this.props.fetchEvents()
//    }
//  }

  render() {
    if (this.props.loadStatus === "pending") {
      return "loading"
    } else {
      console.log(this.props)
      return (
        
          <div>          
            <Switch>
              <Route path={`${this.props.match.path}/new`}>
              <>
                <ModalWrapper title="Add New Event" id="add-event-form" previousUrl={this.props.match.url}>
                  <EventForm 
                    events={this.props.events} 
                  />
                </ModalWrapper>
                </>
              </Route> 
              <Route path='/artists/new' >
                <>
                <ModalWrapper title="Add Artist" id="add-artist-form" previousUrl={this.props.match.url}>   
                  <ArtistForm 
                    event={this.props.events} 
                    filterEvent={this.filterEvent}/>
                </ModalWrapper> 
                </>
              </Route>
              <Route path='/venues/new' >
                <>
                <ModalWrapper title="Add Venue" id="add-venue-form" previousUrl={this.props.match.url}>   
                  <VenueForm 
                    event={this.props.events} 
                    filterEvent={this.filterEvent}/>
                </ModalWrapper> 
                </>
              </Route>
              <Route exact path={`${this.props.match.path}/:id`} render={props => 
                <>
                <ModalWrapper title="Event View" id="show-event" previousUrl={this.props.match.url}>
                  <Event 
                    {...props}
                    event={this.findEvent(this.props.match.params.id)}
                    events={this.props.events} 
                  />
                </ModalWrapper> 
                </>
              }/>
              <Route path={`${this.props.match.path}/:id/edit`} render={props => 
                <>
                <ModalWrapper title="Edit Event" id="edit-event" previousUrl={this.props.match.url}>
                  <EventEdit 
                    {...props}
                    event={this.findEvent(this.props.match.params.id)}
                    events={this.props.events} 
                  />
                </ModalWrapper> 
                </>
              }/>
              
            </Switch>
            <Events events={this.props.events} handleDelete={this.handleDelete}/>
         </div>
      )
  }
  }
}

const mapDispatchToProps = {
    fetchEvents,
    addEvent,
    deleteEvent
}


function mapStateToProps (state) {
    return {
      events: state.events.events
}
}
export default connect(mapStateToProps, mapDispatchToProps)(EventContainer)