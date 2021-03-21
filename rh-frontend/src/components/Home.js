import React from 'react'
import {connect} from 'react-redux'
import {fetchEvents} from '../actions/eventActions'
import EventAll from '../components/events/EventAll'

class Home extends React.Component {

  state = {
    events: [this.props.events],
    artists: [this.props.events],
    venue: [this.props.venues]
  }

  render() {
    return(
      <div>
        <div>
          <h1>Welcome to Event Mapper!</h1>
          <p>Create events and add artists to those events to start building your collection...</p>
        </div>

        <div>
          <EventAll events={this.props.events} 
                    artists={this.props.artists}
                    venues={this.props.venues}/>
        </div> 
      
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    events: state.events,
    artists: state.artists
  }
}

export default connect(mapStateToProps, {fetchEvents})(Home)
