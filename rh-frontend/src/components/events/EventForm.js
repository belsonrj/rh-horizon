import React from 'react'
import { Redirect } from 'react-router-dom'
import { handleInputChange } from '../../utilities'
import {connect} from 'react-redux'
import {addEvent} from '../../actions/addEvent'
import ArtistForm from '../artists/ArtistForm'
import VenueForm from '../venues/VenueForm'

class EventForm extends React.Component{
  state = {
    name: "",
    date: "",
    url: "",
    submitted: false
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addEvent(this.state, this.props.user.id)
    this.setState({
      name: '',
      date: '',
      url: '',
      submitted: true
    })
  }

  render(){
    if (this.state.submitted){
      return <Redirect to="/events" />
    } else {
      return(
        <>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Event Name: </label>
              <input data-testid="add-playlist-input" className="form-control" type="text" name="name" value={this.state.name} onChange={e => handleInputChange.call(this, e)} /><br/>
              <label>Event Date: </label>
              <input data-testid="add-playlist-input" className="form-control" type="date" name="date" value={this.state.date} onChange={e => handleInputChange.call(this, e)} /><br/>
              <label>Event URL: </label>
              <input data-testid="add-playlist-input" className="form-control" type="text" name="url" value={this.state.url} onChange={e => handleInputChange.call(this, e)} /><br/>
            </div> 
            <div>
            <ArtistForm />
            </div>
            <div>
            <VenueForm />
            </div>
            <input data-testid="add-playlist-submit" className="btn btn-primary tertiary-background" type="submit" value="add"/>
          </form>
        </>
      )
    }
  }
}

export default connect(null, {addEvent})(EventForm)