import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { fetchVenues } from '../actions/venueActions'
import Venues from '../components/venues/Venues'
import Venue from '../components/venues/Venue'
import VenueEdit from '../components/venues/VenueEdit'
import ModalWrapper from '../components/ModalWrapper'

class VenueContainer extends React.Component{

  findVenue = id => {
    return this.props.venues.find(venue => venue.id === parseInt(id,10))
  }

//  componentDidUpdate(prevProps) {
//    if (prevProps.artists !== this.props.artists) {
//      this.props.fetchArtists()
//    }
//  }

  render(){
    console.log(this.props);
            return (
              <div>
                <Switch>
                <Route exact path={`${this.props.match.path}/:id`} render={props => 
                <>
                <ModalWrapper title="View Venue" id="add-resource-form" previousUrl={this.props.match.url}>
                  <Venue 
                    {...props}
                    venue={this.findVenue(this.props.match.params.id)}
                    venues={this.props.venues} 
                  />
                </ModalWrapper> 
                </>
              }/>
                <Route path={`${this.props.match.path}/:id/edit`} render={props => 
                <>
                <ModalWrapper title="Edit Venue" id="edit-venue" previousUrl={this.props.match.url}>
                  <VenueEdit 
                    {...props}
                    venue={this.findVenue(this.props.match.params.id)}
                    venues={this.props.venues} 
                  />
                </ModalWrapper> 
                </>
              }/>
              </Switch>
              <Venues venues={this.props.venues}
                    events={this.props.events}/>
              </div>
            )
  }
}

const mapDispatchToProps = {
  fetchVenues
}

const mapStateToProps = state => ({
  venues: state.venues.venues,
  events: state.events.events
})

export default connect(mapStateToProps, mapDispatchToProps)(VenueContainer)