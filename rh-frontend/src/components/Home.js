import React from 'react'
import {connect} from 'react-redux'
import {fetchEvents} from '../actions/eventActions'
import EventAll from '../components/events/EventAll'

class Home extends React.Component {

  render() {
    let events = this.props.events
  return(
    <div>
    <div>
      <h1>Welcome to Event Mapper!</h1>
      <h2>Recent events added by users:</h2>
    </div>
    <div>
    <EventAll events={events}/>
    </div>  
  </div>
  )
}
}

const mapStateToProps = state => {
  return {
    events: state.events
  }
}

export default connect(mapStateToProps, {fetchEvents})(Home)
