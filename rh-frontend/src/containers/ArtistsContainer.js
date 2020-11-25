import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { authorizeUser } from '../actions/userActions'
import { addArtist, fetchArtists } from '../actions/artistActions'
import ArtistForm from '../components/artists/ArtistForm'
import Artists from '../components/artists/Artists'
import UserContainer from '../containers/UserContainer'

class ArtistContainer extends React.Component{
  componentDidMount(){
    this.props.authorizeUser()
    this.props.fetchArtists(this.props.user.current.id)
  }

  componentDidUpdate(prevProps){
    if (prevProps.resourceLoadStatus !== this.props.resourceLoadStatus){
      this.props.fetchArtists(this.props.eventId)
    }
  }

  render(){
      console.log(this.props)
    return(
      <>
        <Route exact path={`${this.props.relativePath}/artists/new`} render={props => {
          if (this.props.user.valid){
            return (
              <ArtistForm 
                eventId={this.props.eventId} 
                user={this.props.user}
                addArtist={this.props.addArtist}
              />
            )
          } else {
            return (
              <UserContainer previousUrl={`/events/${this.props.eventId}`}/>
            )
          }
        }}/>
        <Artists artists={this.props.artists} user={this.props.user} />
      </>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  //artists: state.artist.list,
  loadStatus: state.artists.loadStatus,
  eventLoaded: state.artists.eventLoaded,
  eventLoadStatus: state.events.loadStatus,
  events: state.events.list
})

export default connect(mapStateToProps, { authorizeUser, addArtist, fetchArtists })(ArtistContainer)