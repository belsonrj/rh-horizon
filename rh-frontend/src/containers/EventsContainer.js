import React from 'react';

class EventsContainer extends React.Component {

    componentDidMount(){
        if (!this.props.loadStatus){
          this.props.fetchEvents()
        }
      }
    
      render(){
        return(
            <div>
                
            </div>
        )
      }
    }

export default EventsContainer