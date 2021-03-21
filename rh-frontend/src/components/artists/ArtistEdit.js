import React from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom'
import {editArtist} from '../../actions/artistActions';

class ArtistEdit extends React.Component {

    state = {
        name: "",
        genre: "",
        times_seen: "",
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
        let artist = {...this.state}
        this.props.editArtist(artist, this.props.match.params.id)
        this.setState({
            name: '',
            genre: '',
            times_seen: '',
            submitted: true
        })
    }

    render() {
        let art = this.props.artists.filter(artist => artist.id == this.props.match.params.id)[0];
        if (this.state.submitted){
            return <Redirect to={`/artists`}/>
          } else {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Artist Name:</label><br/>
                    <input type="text" name="name" placeholder={this.state.name} defaultValue={this.state.name} onChange={this.handleChange}/><br/>
                    <label>Genre:</label><br/>
                    <select name="genre" placeholder={this.state.genre} defaultValue={this.state.genre} onChange={this.handleChange}>
                        <option>Rock</option>
                        <option>Indie</option>
                        <option>Hip Hop</option>
                        <option>Metal</option>
                        <option>Country</option>
                        <option>Pop</option>
                    </select>
                    <br/>
                    <label>Times Seen:</label><br/>
                    <input type="integer" name="times_seen" placeholder={art.times_seen} defaultValue={this.state.times_seen} onChange={this.handleChange}/><br/><br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}
}

export default connect(null, {editArtist})(ArtistEdit)