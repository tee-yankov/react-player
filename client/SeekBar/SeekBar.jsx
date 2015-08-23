import React from 'react';

class SeekBar extends React.Component {
  render() {
    let styles = {
      width: (this.props.progress / this.props.duration) * 100 + '%'
    };
    return <div className="seek-bar-container">
        <span className="seek-bar" style={styles}></span>
        <span className="timestamp-left">{this.props.progress ? this.props.progress.toString().replace('.', ':') : '0:00'}</span>
        <span className="timestamp-right">{this.props.duration.replace('.', ':')}</span>
      </div>;
  }

}
export
default SeekBar;
