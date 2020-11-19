import React from 'react';
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar'
import UserContainer from './containers/UserContainer'
import EventContainer from './containers/EventContainer'
import Home from './components/Home'
import Event from './components/events/Event'
import {fetchEvents} from './actions/eventActions'


class App extends React.Component {

  componentDidMount(){
    this.props.fetchEvents()   
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
          <Route path='/users/:id/events/:id' render={routerProps => <Event {...routerProps} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapDispatchToProps(dispatch){
  return { fetchEvents: () => dispatch(fetchEvents()) }
}

const mapStateToProps = state => {
  return {
    events: state.events,
    user: state.user.current
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)