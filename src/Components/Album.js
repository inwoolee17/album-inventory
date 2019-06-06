import React, { Component } from 'react';
import './Album.css';
import Photo from './Photo';

class Album extends Component {
	render() {
		return (
			<div className="Album">
				This is Album
				<Photo />
			</div>
		);
	}
}

export default Album;