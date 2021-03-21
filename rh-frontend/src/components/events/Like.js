import React from 'react'

class Like extends React.Component {

    state = {
      like: 0
    }

    callApi=() => {
        console.log('a')
        fetch(`http://localhost:3001/api/v1/evenhjkhjkts`)
        .then(res => {
            if (res.ok) {
                console.log('b')
                return res.json()
            } else {
                throw new Error('Error')
            }
           
        })
        .then(data => console.log('c', data))
        .catch(err => console.log('d', err))
        console.log('e')

        // a e b c

        // a e d

    }
  
    like = (e) => {
      let newCount = this.state.like + 1
      this.setState({
        like: newCount
      })
    }

render() {
    return (
      <div>
        <button onClick={() => this.callApi()}>Like</button>
        <div>{this.state.like}</div>
     </div>
    )}
}

export default Like