import React from 'react';
import {connect} from 'react-redux'
import {addUser} from '../actions/addUser'

class UserInput extends React.Component {

    state = {username: '', password_digest: ''}

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addUser(this.state)
        this.setState({
            username: '',
            password_digest: ''
        })
    }

    render() {
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
                <label>User Name: </label><br/>
                <input type='text' placeholder='Name' value={this.state.name} name='name' onChange={this.handleChange}/><br/>
                <label>Password: </label><br/>
                <input type='text' placeholder='Password' value={this.state.password_digest} name='password_digest' onChange={this.handleChange}/><br/>
                <input type='submit' /><br/><br/>
            </form>
          </div>
        )
    }
}

export default connect(null, {addUser})(UserInput);