import React from 'react';
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar'
import EventContainer from './containers/EventContainer'
import ArtistsContainer from './containers/ArtistsContainer'
import ArtistForm from './components/artists/ArtistForm'
import EventEdit from './components/events/EventEdit'
import Home from './components/Home'
import {fetchArtists} from './actions/artistActions'
import {fetchEvents} from './actions/eventActions'


class App extends React.Component {

  componentDidMount() {
    this.props.fetchEvents()
    this.props.fetchArtists()
  }

  render() {  
  return (
      <Router>  
        <NavBar />      
        <div className="container">
          <Switch>
          <Route exact path="/"  component={(routerProps) => <Home {...routerProps} />}/>
          
          <Route path='/events/:id/artists/new' render={routerProps => <ArtistForm {...routerProps} />} />
          <Route path='/events' render={routerProps => <EventContainer {...routerProps} />} />      
          <Route path='/artists' render={routerProps => <ArtistsContainer {...routerProps} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps (state) {
  return {
    events: state.events,
    artists: state.artists
}
}


export default connect(mapStateToProps, {fetchEvents, fetchArtists})(App)