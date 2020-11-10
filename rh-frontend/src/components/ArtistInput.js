import React from 'react';
import {connect} from 'react-redux';
import {addArtist} from '../actions/addArtist';

class ArtistInput extends React.Component {

    state = {
        name: '',
        genre: ''
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
            genre: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Artist Name:</label><br/>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/><br/>
                    <label>Genre:</label><br/>
                    <select name="genre" value={this.state.genre} onChange={this.handleChange}>
                        <option>Rock</option>
                        <option>Indie</option>
                    </select>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect(null, {addArtist})(ArtistInput)