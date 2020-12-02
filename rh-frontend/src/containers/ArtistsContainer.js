import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { fetchArtists } from '../actions/artistActions'
import Artists from '../components/artists/Artists'
import Artist from '../components/artists/Artist'
import ArtistEdit from '../components/artists/ArtistEdit'
import ModalWrapper from '../components/ModalWrapper'

class ArtistContainer extends React.Component{

  findArtist = id => {
    return this.props.artists.find(artist => artist.id === parseInt(id,10))
  }

//  componentDidUpdate(prevProps) {
//    if (prevProps.artists !== this.props.artists) {
//      this.props.fetchArtists()
//    }
//  }

  render(){
    console.log(this.props);
            return (
              <div>
                <Switch>
                <Route exact path={`${this.props.match.path}/:id`} render={props => 
                <>
                <ModalWrapper title="Show Artist" id="add-resource-form" previousUrl={this.props.match.url}>
                  <Artist 
                    {...props}
                    artist={this.findArtist(this.props.match.params.id)}
                    artists={this.props.artists} 
                  />
                </ModalWrapper> 
                </>
              }/>
                <Route path={`${this.props.match.path}/:id/edit`} render={props => 
                <>
                <ModalWrapper title="Edit Artist" id="edit-artist" previousUrl={this.props.match.url}>
                  <ArtistEdit 
                    {...props}
                    artist={this.findArtist(this.props.match.params.id)}
                    artists={this.props.artists} 
                  />
                </ModalWrapper> 
                </>
              }/>
              </Switch>
              <Artists artists={this.props.artists}/>
              </div>
            )
  }
}

const mapDispatchToProps = {
  fetchArtists
}

const mapStateToProps = state => ({
  artists: state.artists.artists,
  events: state.events.events
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtistContainer)