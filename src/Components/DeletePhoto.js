import React, { Component } from 'react';
import './DeletePhoto.css'
import axios from 'axios';
import { css } from '@emotion/core';
import ClipLoader from 'react-spinners/ClipLoader';
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const override = css`
		display: block;
		margin: 0 auto;
		border-color: red;
`;

class DeletePhoto extends Component {
	constructor(){
		super();

		this.state = {
			album: null,
			loading: true,
			lightBoxImage: null,
			lightBoxOpen: false,
		}
	};

	componentDidMount(){
		console.log('deletephoto')
		axios.get('/api/album')
			.then(res => {
			this.setState({
				loading: false,
				album: res.data
			})
		})
		.catch( error => {
			console.log(error);
		})
	};

	deletePhoto = (id) => {
		console.log("delete photo")
		axios.delete(`/api/album/${id}`)
			.then(res => {
				console.log(res);
				axios.get('/api/album')
				.then(res => {
				this.setState({
					loading: false,
					album: res.data
				})
			})
			.catch( error => {
				console.log(error);
			})
			})
			.catch(error => {
				console.log(error);
			})
	};

	ligthBox = (image) => {
		this.setState({
			lightBoxImage: image,
			lightBoxOpen: true,
		})
	};

	render() {
		console.log('render---')
		let album = this.state.album ? this.state.album.map( (e, i) => {
			return (
				<div key={i} className="PhotoList">
					<img onClick={ () => this.lightBox(e.image)} src={e.image} alt={"albumPhoto"} />
					<div className="PhotoList-Description">
						<span>{e.name}</span>
						<button onClick={ () => this.deletePhoto(e.id)}>Delete</button>
					</div>
				</div>
			);
		}) : null;
		return (
			<div className="Photo">
				<ClipLoader
					css={override}
					sizeUnit={"px"}
					size={50}
					color={'#123abc'}
					loading={this.state.loading}
				/>
				{album}
				{this.state.lightBoxOpen && (
					<Lightbox
					 mainSrc={this.state.lightBoxImage}
					 onCloseRequest={() => this.setState({ lightBoxOpen: false })}
				/>
				)}
			</div>
		);
	}
}

export default DeletePhoto;
