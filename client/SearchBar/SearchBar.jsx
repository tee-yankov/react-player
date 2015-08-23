import React from 'react';

class SearchBar extends React.Component {
		state = {
				searchInput: ''
		}
		handleInput = (e) => {
				const debounce = window.setTimeout(function() {
					console.log('timed out');
				}, 1000);
				console.log(e.target.value);
				let query = e.target.value;
				SC.get('/tracks', {
						q: query
				}, function(tracks) {
						console.log(tracks);
				});
				this.setState({
						searchInput: e.target.value
				});
		}
		render() {
				return <input className="SearchBar" onChange={this.handleInput} value={this.state.searchInput}/>;
		}
}
export
default SearchBar;
