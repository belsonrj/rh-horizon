import React from 'react';

import ArtistInput from '../components/ArtistInput';
import Artists from '../components/Artists';

class ArtistsContainer extends React.Component {

    render() {
        return (
            <div>
                <ArtistInput user={this.props.user}/>
                <Artists artists={this.props.user && this.props.user.artists}/>
            </div>
        )
    }
}

export default ArtistsContainer