function handleInputChange(e){
  this.setState({
    [e.target.name]: e.target.value
  })
}

function handleSubmit(submitObj){
  //debugger;
  submitObj.e.preventDefault()
  submitObj.callback(submitObj.currentState)
  this.setState({
    ...submitObj.clearState,
    submitted: true
  })
}
  
  
  function findEvent(id){
    debugger;
    return this.props.events.events.find(evnt => evnt.id === parseInt(id, 10))
  }
  
  export { handleInputChange, handleSubmit, findEvent }