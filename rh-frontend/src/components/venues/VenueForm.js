import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import { handleInputChange } from '../../utilities'
import {addVenue} from '../../actions/venueActions'

class VenueForm extends React.Component{
  state = {
    name: '',
    address: '',
    venue_type: '',
    times_visited: '0',
    submitted: false
  }

  handleSelectSubmit = e => {
    e.preventDefault()
    //const id = this.state.selectId ? this.state.selectId : this.props.events[0].id
    const eventId = this.props.match.params.id
    this.props.addVenue(this.state, eventId)
    this.setState({
        name: '',
        address: '',
        venue_type: '',
        times_visited: '0',
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
                <h5 className="modal-title">Add Venue</h5>
                <Link data-testid="exit-comment-modal" to={`/events/${this.props.match.params.id}`} type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </Link>
              </div>
              <div className="modal-body">
                <form onSubmit={this.handleSelectSubmit}>
                  <div className="form-group">
                    <label>Venue Name:</label><br/>
                    <input type="text" name="name" value={this.state.name} onChange={e => handleInputChange.call(this, e)}/><br/>
                    <label>Venue Address:</label><br/>
                    <input type="text" name="address" value={this.state.address} onChange={e => handleInputChange.call(this, e)}/><br/>
                    <label>Venue Type:</label><br/>
                    <select name="venue_type" value={this.state.venue_type} onChange={e => handleInputChange.call(this, e)}>
                        <option value=''></option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                        <option>Arena</option>
                        <option>Bar</option>
                        <option>Theatre</option>
                        <option>Pavilion</option>
                        <option>Outdoor</option>
                    </select><br/>
                    <input type="hidden" name="times_visited" value={this.state.times_visited}/>
                </div>
                    <input data-testid="add-playlist-submit" className="btn btn-primary tertiary-background" type="submit" value="Add Venue"/>
             </form>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default connect(null, {addVenue})(VenueForm)