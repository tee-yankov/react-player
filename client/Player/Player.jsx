import React from 'react';
import CoverArt from '../CoverArt/CoverArt.jsx';
import Controls from '../Controls/Controls.jsx';
import SeekBar from '../SeekBar/SeekBar.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';

class Player extends React.Component {
  static defaultProps = {
    autoPlay: false
  }
  state = {
    playing: this.props.autoPlay,
    progress: 0,
    song: {
      title: 'Tep No',
      author: 'It\'s Alright',
      cover: 'https://i1.sndcdn.com/artworks-000121241575-vewqxc-large.jpg',
      duration: '3:40'
    }
  }
  componentWillMount() {
    const clientId = 'a553efb91753b7b28f7c5c5b4929359b';
    if (SC) {
      SC.initialize({
        client_id: clientId
      });
    }
    SC.stream('/tracks/211809900', (sound) => {
      this.setState({
        sound: sound,
        song: {
          author: this.state.song.author,
          title: this.state.song.title,
          cover: this.state.song.cover,
          duration: (((((sound.getDuration() / 1000) % 31536000) % 86400) % 3600) / 60).toFixed(2)
        }
      });
    });
  }
  togglePlaying = () => {
    if (this.state.playing) {
      this.state.sound.pause();
    } else {
      this.state.sound.play();
      let progressInterval = setInterval(() => {
        this.setState({
          progress: (((((this.state.sound.getCurrentPosition() / 1000) % 31536000) % 86400) % 3600) / 60).toFixed(2)
        });
      }, 100);
    }
    this.setState({
      playing: !this.state.playing
    });
  }
  render() {
    return <div className="player-container">
        <SearchBar />
        <CoverArt cover={this.state.song.cover}/>
        <SeekBar duration={this.state.song.duration} progress={this.state.progress}/>
        <Controls playing={this.state.playing} song={this.state.song} toggle={this.togglePlaying}/>
      </div>;
  }

}
export
default Player;
