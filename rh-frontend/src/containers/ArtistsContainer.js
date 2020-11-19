import React from 'react';

import Artists from '../components/Artists';

class ArtistsContainer extends React.Component {

    render() {
        return (
            <div>                
                <Artists artists={this.props.user && this.props.user.artists}/>
            </div>
        )
    }
}

export default ArtistsContainer