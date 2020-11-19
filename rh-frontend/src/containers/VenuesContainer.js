import React from 'react';

import Venues from '../components/Venues';

class VenuesContainer extends React.Component {

    render() {
        return (
            <div>                
                <Venues venues={this.props.user && this.props.user.artists}/>
            </div>
        )
    }
}

export default VenuesContainer