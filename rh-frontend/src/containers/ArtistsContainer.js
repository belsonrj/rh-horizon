import React from 'react';
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import ArtistForm from '../components/artists/ArtistForm'
import Artists from '../components/artists/Artists'
import Artist from '../components/artists/Artists'
import { authorizeUser, loginUser } from '../actions/userActions'

class ArtistsContainer extends React.Component {
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
                <Route path='/artists/new' render={(routerProps) => <ArtistForm {...routerProps} user={this.props.user.current}/>}/>
                <Route path='/artists/:id' render={(routerProps) => <Artist {...routerProps} artists={this.props.artists}/>}/>
              </Switch>
              <h3>{`${this.props.user.current.username}'s Artists:`}</h3>             
                <Artists artists={this.props.user && this.props.user.artists}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    artists: state.artists
  })
  
  const mapDispatchToProps = { 
    loginUser, 
    authorizeUser
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ArtistsContainer)