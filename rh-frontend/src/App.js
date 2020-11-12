import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
//import NavBar from './components/NavBar'
import UserContainer from './containers/UserContainer'
import EventContainer from './containers/EventContainer'


  function App() {
    return (
      <Router>        
        <div className="container">
          <Switch>
          <Route exact path="/" render={props => <EventContainer {...props}/>} />
          <Route path="/logout" render={props => <UserContainer {...props}/>}/>
          <Route path="/login" render={props => <UserContainer {...props} previousUrl={props.location.previousUrl}/>} />
          <Route path="/signup" render={props => <UserContainer {...props} />} />
          <Route path="/events" render={props => <EventContainer {...props}/>} />
          </Switch>
        </div>
      </Router>
    );
  }
  
  export default App;
