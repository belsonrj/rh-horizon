import React from 'react';
//import { connect } from 'react-redux';
//import {fetchUsers} from './actions/fetchUsers'
import UsersContainer from './containers/UsersContainer'

class App extends React.Component {


  render() {
    return (
      <div className="App">
        <UsersContainer />
      </div>
    );
    }
}

//const mapStateToProps = (state) => {
//  return {
//    artists: state.artists
//  }
//}

export default (App)
