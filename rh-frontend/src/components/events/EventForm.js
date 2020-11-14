import React from 'react'
import { Redirect } from 'react-router-dom'
import { handleSubmit } from '../../utilities'
import '../../stylesheets/resources.css'

class EventForm extends React.Component {

  static cleanState = {
    name: "",
    date: "",
    url: "",
    submitted: false
  }

  state = {
    ...this.constructor.cleanState
  }

  handleInputChange = e => {
    let value;
    this.setState({
      [e.target.name]: value
    })
  }

    render(){
        if (this.state.submitted){
          return <Redirect to="/events"/>
        } else {
          return(
            <div>
              <form onSubmit={e => handleSubmit.call(this, {
                e, 
                callback: this.props.addEvent,
                currentState: this.state,
                clearState: {...this.constructor.cleanState}
              })}>
                <div className="form-group">
                    <label>Name: </label>
                    <input className="form-control" type="text" name="name" value={this.state.name} onChange={this.handleInputChange}/>
                </div>
                <div className="form-group">
                  <label>Date: </label>
                  <input className="form-control" type="text" name="date" value={this.state.date} onChange={this.handleInputChange}/>
                </div>
                <div className="form-group">
                    <label>Image Link: </label>
                    <input className="form-control" type="text" name="url" value={this.state.url} onChange={this.handleInputChange}/>
                </div>
                <input className="btn btn-primary tertiary-background" type="submit" value="Add Event"/>
              </form>
            </div>
          )
        }
      }
    }

export default EventForm