import React from 'react';
import {connect} from 'react-redux';
import {addVenue} from '../../actions/addVenue';

class VenueForm extends React.Component {

    state = {
        name: '',
        address: '',
        venue_type: '',
        times_visited: '',
        prices: '',
        sound: '',
        layout: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addArtist(this.state, this.props.user.id)
        this.setState({
            name: '',
            address: '',
            venue_type: '',
            times_visited: '',
            prices: '',
            sound: '',
            layout: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Venue Name:</label><br/>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/><br/>
                    <label>Address:</label><br/>
                    <input type="text" name="address" value={this.state.address} onChange={this.handleChange}/><br/>
                    <label>Venue Type:</label><br/>
                    <select name="venue_type" value={this.state.venue_type} onChange={this.handleChange}>
                        <option value=''></option>
                        <option>Bar</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                        <option>Theatre</option>
                        <option>Pavillion</option>
                        <option>Outdoor</option>
                    </select><br/>
                    <label>Prices:</label><br/>
                    <select name="prices" value={this.state.prices} onChange={this.handleChange}>
                        <option value=''></option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select><br/>
                    <label>Sound:</label><br/>
                    <select name="sound" value={this.state.sound} onChange={this.handleChange}>
                        <option value=''></option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select><br/>
                    <label>Layout:</label><br/>
                    <select name="layout" value={this.state.layout} onChange={this.handleChange}>
                        <option value=''></option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select><br/>
                    
                </form>
            </div>
        )
    }
}

export default connect(null, {addVenue})(VenueForm)