import React from 'react';
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar'
import UserContainer from './containers/UserContainer'
import EventContainer from './containers/EventContainer'
import ArtistsContainer from './containers/ArtistsContainer'
import ArtistForm from './components/artists/ArtistForm'
import Home from './components/Home'
import Event from './components/events/Event'
//import {fetchEvents} from './actions/eventActions'


class App extends React.Component {

  state = {
    user: [this.props.user]
  }

  render() {  
  return (
      <Router>  
        <NavBar />      
        <div className="container">
          <Switch>
          <Route exact path="/"  component={(routerProps) => <Home {...routerProps} events={this.props.events}/>}/>
          <Route path="/logout" render={props => <UserContainer {...props}/>}/>
          <Route path="/login" render={props => <UserContainer {...props} previousUrl={props.location.previousUrl}/>} />
          <Route path="/signup" render={props => <UserContainer {...props} />} />
          <Route path='/events' render={routerProps => <EventContainer {...routerProps} user={this.props.user} events={this.props.events}/>} />
          <Route exact path='/artists' render={routerProps => <ArtistsContainer {...routerProps} user={this.props.user} artists={this.props.user.artists}/>} />
          <Route path='/artists/new' render={routerProps => <ArtistForm {...routerProps} user={this.props.user.current} />} />
          
          </Switch>
        </div>
      </Router>
    );
  }
}


const mapStateToProps = state => {
  return {
    user: state.user.current
  }
}

export default connect(mapStateToProps)(App)