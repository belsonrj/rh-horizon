import React from 'react';
import {Link} from 'react-router-dom';
//import User from '../components/User'

const Users = (props) => {
    return (
        <div>
          {props.users.map(user => 
          <li key={user.id}>
              <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
          )}
        </div>
    )
}

export default Users;