import React from 'react';
import {connect} from 'react-redux';
import {addArtist} from '../../actions/addArtist';

class ArtistForm extends React.Component {

    state = {
        name: '',
        genre: '',
        times_seen: '',
        met: ''
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
            genre: '',
            times_seen: '',
            met: ''
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
                        <option value=''></option>
                        <option>Rock</option>
                        <option>Indie</option>
                    </select><br/>

                    <label>Met:</label><br/>
                    <input type="checkbox" name="met" checked={this.state.checked} onChange={this.handleChange.bind(this)}/><br/>
                    
                </form>
            </div>
        )
    }
}

export default connect(null, {addArtist})(ArtistForm)