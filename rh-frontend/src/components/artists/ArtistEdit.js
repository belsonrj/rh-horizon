import React from 'react';
import {connect} from 'react-redux';
import {editArtist} from '../../actions/artistActions';

class ArtistEdit extends React.Component {

    state = {
        name: '',
        genre: '',
        times_seen: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let artist = {...this.state, id: this.props.artist.id}
        this.props.editArtist(artist, this.props.artist.user.id)
        this.setState({
            name: '',
            genre: '',
            times_seen: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Artist Name:</label><br/>
                    <input type="text" name="name" placeholder={this.props.artist.name} value={this.state.name} onChange={this.handleChange}/><br/>
                    <label>Genre:</label><br/>
                    <select name="genre" placeholder={this.props.artist.genre} value={this.state.genre} onChange={this.handleChange}>
                        <option value=''></option>
                        <option>Rock</option>
                        <option>Indie</option>
                        <option>Hip Hop</option>
                        <option>Metal</option>
                        <option>Country</option>
                        <option>Pop</option>
                    </select><br/>
                    <label>Times Seen:</label><br/>
                    <input type="integer" name="times_seen" placeholder={this.props.artist.times_seen} value={this.state.times_seen} onChange={this.handleChange}/><br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect(null, {editArtist})(ArtistEdit)