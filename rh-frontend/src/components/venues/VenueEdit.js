import React from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom'
import {editVenue} from '../../actions/venueActions';

class VenueEdit extends React.Component {

    state = {
        name: "",
        address: "",
        venue_type: "",
        times_visited: "",
        submitted: false
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        debugger;
        event.preventDefault()
        let venue = {...this.state}
        this.props.editVenue(venue, this.props.match.params.id)
        this.setState({
            name: "",
            address: "",
            venue_type: "",
            times_visited: "",
            submitted: true
        })
    }

    render() {
        let ven = this.props.venues.filter(venue => venue.id == this.props.match.params.id)[0];
        if (this.state.submitted){
            return <Redirect to={`/venues`}/>
          } else {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Venue Name:</label><br/>
                    <input type="text" name="name" placeholder={this.state.name} defaultValue={this.state.name} onChange={this.handleChange}/><br/>
                    <label>Venue Address:</label><br/>
                    <input type="text" name="address" placeholder={this.state.address} defaultValue={this.state.address} onChange={this.handleChange}/><br/>
                    <label>Venue Type:</label><br/>
                    <select name="venue_type" placeholder={this.state.venue_type} defaultValue={this.state.venue_type} onChange={this.handleChange}>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                        <option>Arena</option>
                        <option>Theatre</option>
                        <option>Bar</option>
                        <option>Outdoor</option>
                        <option>Pavilion</option>
                    </select>
                    <br/>
                    <label>Times Visited:</label><br/>
                    <input type="integer" name="times_visited" placeholder={ven.times_visited} defaultValue={this.state.times_visited} onChange={this.handleChange}/><br/><br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}
}

export default connect(null, {editVenue})(VenueEdit)