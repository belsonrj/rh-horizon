import React from 'react';

class App extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/users', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }

    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  render() {
    return (
      <div className="App">
        App
      </div>
    );
    }
}

export default App;
