import React from 'react';

class CoverArt extends React.Component {
  render() {
    return <div className="cover-art-container" ref="coverArt">
        <img className="cover-art-image" src={this.props.cover}/>
        <img className="soundcloud-logo" src="Assets/Images/soundcloud.png"/>
      </div>;
  }

}
export default CoverArt;
