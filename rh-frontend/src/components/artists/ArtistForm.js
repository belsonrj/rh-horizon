import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import { handleInputChange } from '../../utilities'
import {addArtist} from '../../actions/artistActions'

class ArtistForm extends React.Component{
  state = {
    name: '',
    genre: '',
    submitted: false
  }

  handleSelectSubmit = e => {
    e.preventDefault()
    //const id = this.state.selectId ? this.state.selectId : this.props.events[0].id
    const eventId = this.props.match.params.id
    this.props.addArtist(this.state, eventId, this.props.user.id)
    this.setState({
      name: "",
      genre: "",
      selectId: null,
      submitted: true
    })
  }

  render(){
    console.log(this.props)
    //debugger;
    if (this.state.submitted){
      return <Redirect to={`/events/${this.props.match.params.id}`} user={this.props.user}/>
    } else {
      return(
        <div data-testid="comment-form" className="modal" id="comment-form" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Artist</h5>
                <Link data-testid="exit-comment-modal" to={`/events/${this.props.match.params.id}`} type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </Link>
              </div>
              <div className="modal-body">
                <form onSubmit={this.handleSelectSubmit}>
                  <div className="form-group">
                    <label>Artist Name:</label><br/>
                    <input type="text" name="name" value={this.state.name} onChange={e => handleInputChange.call(this, e)}/><br/>
                    <label>Genre:</label><br/>
                    <select name="genre" value={this.state.genre} onChange={e => handleInputChange.call(this, e)}>
                        <option value=''></option>
                        <option>Rock</option>
                        <option>Indie</option>
                        <option>Hip Hop</option>
                        <option>Metal</option>
                        <option>Country</option>
                        <option>Pop</option>
                    </select><br/>
                </div>
                    <input data-testid="add-playlist-submit" className="btn btn-primary tertiary-background" type="submit" value="Add Artist"/>
             </form>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default connect(null, {addArtist})(ArtistForm)