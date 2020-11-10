import React from 'react';
import { connect } from 'react-redux';
import {Route, Switch} from 'react-router-dom';

import { fetchUsers } from '../actions/fetchUsers'
import Users from '../components/Users';
import User from '../components/User';
import UserInput from '../components/UserInput'

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.fetchUsers()
  }

    render() {
        return(
            <div>
                <Switch>
                    <Route path='/users/new' component={UserInput} />
                    <Route path='/users/:id' render={(routerProps) => <User {...routerProps} users={this.props.users}/>}/>
                    <Route exact path='/users' render={(routerProps) => <Users {...routerProps} users={this.props.users}/>}/>
                </Switch>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, {fetchUsers})(UsersContainer);