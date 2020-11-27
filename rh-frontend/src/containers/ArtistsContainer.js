import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { authorizeUser, loginUser } from '../actions/userActions'
import { fetchArtists } from '../actions/artistActions'
//import ArtistForm from '../components/artists/ArtistForm'
import Artists from '../components/artists/Artists'
import Artist from '../components/artists/Artist'
import ModalWrapper from '../components/ModalWrapper'
import Home from '../components/Home'

class ArtistContainer extends React.Component{

  constructor(props) {
    super(props);

  this.state = {
    user: [this.props.user]
  };
}
  componentDidMount(){
    if (!this.props.loadStatus){
    }
    this.props.authorizeUser()
    this.setState({
      artists: this.props.fetchArtists(this.props.user.current.id)
    })
  }

  componentDidUpdate(prevProps){
    if (prevProps.user.current.valid !== this.state.user.valid){
      this.setState({
        artists: this.props.fetchArtists(this.props.user.current.id)
      })
    }
  }

  findArtist = id => {
    return this.props.artists.find(artist => artist.id === parseInt(id,10))
  }

  render(){
      console.log(this.props)
          if (this.props.user.valid){
            return (
              <div>
                <Switch>
                <Route path={`${this.props.match.path}/:id`} render={props => 
                <>
                <ModalWrapper title="Show Artist" id="add-resource-form" previousUrl={this.props.match.url}>
                  <Artist 
                    {...props}
                    artist={this.findArtist(this.props.match.params.id)}
                    user={this.props.user.current} 
                    artists={this.props.artists} 
                  />
                </ModalWrapper> 
                </>
              }/>
              </Switch>
              <Artists artists={this.props.artists} user={this.props.user} />
              </div>
            )
          } else {
            return (
              <>
              <Home />
              </>
            )}
  }
}

const mapDispatchToProps = {
  loginUser,
  authorizeUser,
  fetchArtists
}

const mapStateToProps = state => ({
  user: state.user,
  artists: state.artists.list,
  loadStatus: state.artists.loadStatus,
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtistContainer)