import React from'react'
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom'
import {editEvent} from '../../actions/eventActions';

class EventEdit extends React.Component {
  
    state = {
        name: "",
        date: "",
        url: "",
        comments: "",
        submitted: false
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let evnt = {...this.state}
        this.props.editEvent(evnt, this.props.match.params.id)
        this.setState({
            name: "",
            date: "",
            url: "",
            comments: "",
            submitted: true
        })
    }

    render(){
      let evnt = this.props.events.filter(event => event.id == this.props.match.params.id)[0];
        if (this.state.submitted === true){
          return <Redirect to='/events'/>
        } else {
          return(
            <>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Event Name: </label>
                  <input data-testid="add-playlist-input" className="form-control" type="text" name="name" placeholder={evnt.name} value={this.state.name} onChange={this.handleChange} /><br/>
                  <label>Event Date: </label>
                  <input data-testid="add-playlist-input" className="form-control" type="date" name="date" placeholder={evnt.date} value={this.state.date} onChange={this.handleChange} /><br/>
                  <label>Image URL: </label>
                  <input data-testid="add-playlist-input" className="form-control" type="text" name="url" placeholder={evnt.url} value={this.state.url} onChange={this.handleChange} /><br/>
                  <label>Comments/Notes: </label>
                  <input data-testid="add-playlist-input" className="form-control" type="text" name="comments" placeholder={evnt.comments} value={this.state.comments} onChange={this.handleChange} /><br/>            
                </div>
    
                <input data-testid="add-playlist-submit" className="btn btn-primary tertiary-background" type="submit" value="add"/>
              </form>
            </>
          )
        }
      }
}

export default connect(null, {editEvent})(EventEdit)