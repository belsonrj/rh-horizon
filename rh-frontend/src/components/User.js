import React from 'react';
//import {Redirect} from 'react-router-dom';

import ArtistsContainer from '../containers/ArtistsContainer';

const User = (props) => {

let user = props.users.filter(user => user.id == props.match.params.id)[0]

    return (
      <div>
        <h2>
            {user ? user.name : null}
        </h2>
        <ArtistsContainer user={user}/>
      </div>
    )
}
//{user ? null : <Redirect to='/accounts'/>}
export default User