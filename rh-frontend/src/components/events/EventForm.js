import React from 'react';
import { Redirect } from 'react-router-dom'
import { handleSubmit } from '../../utilities'
//import ArtistForm from '../components/artists/ArtistForm';
//import VenueForm from '../components/venues/VenueForm';

class EventForm extends React.Component {

    state = {
        name: '',
        date: '',
        url: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addEvent(this.state, this.props.id)
        this.setState({
            name: '',
            date: '',
            url: ''
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