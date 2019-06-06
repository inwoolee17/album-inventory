import React, { Component } from 'react';
import './AddPhoto.css';
import axios from 'axios';

class AddPhoto extends Component {
	constructor() {
		super();

		this.state = {
			photoName: '',
			photoImage: '',
		}
	}

	handleInputChange = (event) => {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}

	handleSubmit = event => {
		let newPhoto = {
			photoName: this.state.photoName,
			photoImage: this.state.photoImage,
		};

		axios.post('/api/album', newPhoto).then( res => {
			console.log("success");
		}).catch( error => {
			console.log("error");
		})
	}

	render() {
		return (
			<div className="AddPhoto">
				Add Photo
				<form onSubmit={this.handleSubmit}>
				<label>
					Photo Name:
					<input
						name="photoName"
						type="text"
						value={this.state.photoName}
						onChange={this.handleInputChange} />
				</label>
				<br />
				<label>
					Photo Image Url:
					<input
						name="photoImage"
						type="text"
						value={this.state.photoImage}
						onChange={this.handleInputChange} />
				</label>
				<br />
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default AddPhoto;