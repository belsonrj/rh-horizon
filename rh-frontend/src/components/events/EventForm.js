import React from 'react'
import { Redirect } from 'react-router-dom'
import { handleInputChange, handleSubmit } from '../../utilities'

class EventForm extends React.Component{
  state = {
    name: "",
    date: "",
    url: "",
    submitted: false
  }

  render(){
    if (this.state.submitted){
      return <Redirect to="/events" />
    } else {
      return(
        <>
          <form onSubmit={e => handleSubmit.call(this, {
            e,
            callback: this.props.addEvent,
            currentState: {...this.state},
            clearState: {...this.props.clearState}
          })}>
            <div className="form-group">
              <label>Event Name: </label>
              <input data-testid="add-playlist-input" className="form-control" type="text" name="name" value={this.state.name} onChange={e => handleInputChange.call(this, e)} /><br/>
              <label>Event Date: </label>
              <input data-testid="add-playlist-input" className="form-control" type="date" name="date" value={this.state.date} onChange={e => handleInputChange.call(this, e)} /><br/>
              <label>Event URL: </label>
              <input data-testid="add-playlist-input" className="form-control" type="text" name="url" value={this.state.url} onChange={e => handleInputChange.call(this, e)} /><br/>
            </div> 
            <input data-testid="add-playlist-submit" className="btn btn-primary tertiary-background" type="submit" value="add"/>
          </form>
        </>
      )
    }
  }
}

export default EventForm