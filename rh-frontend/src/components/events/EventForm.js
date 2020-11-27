import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { handleInputChange } from '../../utilities'
import {connect} from 'react-redux'
import {addEvent} from '../../actions/eventActions'
//import ArtistForm from '../artists/ArtistForm'
//import addIcon from '../../assets/add-icon.png'

class EventForm extends React.Component{

//  constructor(props) {
//    super(props);
//    this.state = { 
      //redirect: false
//    };

//    this.handleSubmit = this.handleSubmit.bind(this);
//  }

  state = {
    name: "",
    venue: "",
    date: "",
    url: "",
    comments: "",
    submitted: false
  }

  //state = {
  //  ...this.constructor.cleanState
  //}

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addEvent(this.state, this.props.user.id)
    this.setState({
      name: "",
      venue: "",
      date: "",
      url: "",
      comments: "",
      submitted: true
    })
  }

  render(){
    if (this.state.submitted){
      return <Redirect to='/events' />
    } else {
      return(
        <>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Event Name: </label>
              <input data-testid="add-playlist-input" className="form-control" type="text" name="name" value={this.state.name} onChange={e => handleInputChange.call(this, e)} /><br/>
              <label>Venue Name: </label>
              <input data-testid="add-playlist-input" className="form-control" type="text" name="venue" value={this.state.venue} onChange={e => handleInputChange.call(this, e)} /><br/>
              <label>Event Date: </label>
              <input data-testid="add-playlist-input" className="form-control" type="date" name="date" value={this.state.date} onChange={e => handleInputChange.call(this, e)} /><br/>
              <label>Image URL: </label>
              <input data-testid="add-playlist-input" className="form-control" type="text" name="url" value={this.state.url} onChange={e => handleInputChange.call(this, e)} /><br/>
              <label>Comments/Notes: </label>
              <input data-testid="add-playlist-input" className="form-control" type="text" name="comments" value={this.state.comments} onChange={e => handleInputChange.call(this, e)} /><br/>            
            </div>

            <input data-testid="add-playlist-submit" className="btn btn-primary tertiary-background" type="submit" value="add"/>
          </form>
        </>
      )
    }
  }
}

export default connect(null, {addEvent})(EventForm)