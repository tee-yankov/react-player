import React from 'react';
import cx from 'classnames';

class Controls extends React.Component {
  handleClick = (e) => {
    this.props.toggle();
  }

  render() {
    let classes = cx({
      'control-play': true,
      'paused': !this.props.playing,
      'playing': this.props.playing
    });
    return <div className="controls-container">
      <span className={classes} onClick={this.handleClick}></span>
      <div className="artist-info-container">
        <h2>{this.props.song.title}</h2>
        <h5>{this.props.song.author}</h5>
      </div>
      <div className="controls-right-container">
        <span>
          <i className="fa fa-retweet"></i>
        </span>
        <span>
          <i className="fa fa-backward"></i>
        </span>
        <span>
          <i className="fa fa-forward"></i>
        </span>
      </div>
    </div>;
  }

}

export default Controls;
