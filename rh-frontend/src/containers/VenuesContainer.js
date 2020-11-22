import React from 'react';
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import VenueForm from '../components/venues/VenueForm'
import Venues from '../components/venues/Venues'
import Venue from '../components/venues/Venue'
import { authorizeUser, loginUser } from '../actions/userActions'

class VenuesContainer extends React.Component {

    componentDidMount(){
        this.props.authorizeUser()
        //this.props.fetchUserEvents(this.props.user.current.id)
        
      }
    
      componentDidUpdate(prevProps){
        if (prevProps.user.valid !== this.props.user.valid){
          this.props.fetchUserEvents(this.props.user.current.id)
        }
      }

      render() {
        return (
            <div>          
              <Switch>
                <Route path='/venues/new' render={(routerProps) => <VenueForm {...routerProps} user={this.props.user.current}/>}/>
                <Route path='/venues/:id' render={(routerProps) => <Venue {...routerProps} venues={this.props.venues}/>}/>
              </Switch>
              <h3>{`${this.props.user.current.username}'s Venues:`}</h3>             
                <Venues venues={this.props.user && this.props.user.current.venues}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    venues: state.venues
  })
  
  const mapDispatchToProps = { 
    loginUser, 
    authorizeUser
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(VenuesContainer)