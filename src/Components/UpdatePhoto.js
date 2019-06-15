import React, { Component } from 'react';
import './UpdatePhoto.css';
import axios from 'axios';

class UpdatePhoto extends Component {
  constructor() {
    super();

    this.state = {
      houseName: '',
      housePrice: '',
      swimmingPool: 'Yes',
      houseImage: '',
      houseID: ''
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
    let updateHouse = {
      photoName: this.state.photoName,
      photoImage: this.state.photoImage,
      photoID: this.state.photoID,
    };
    axios.put(`/api/album`, updateHouse).then( res => {
      console.log("success");
    }).catch( error => {
      console.log("error", error);
    })
  }  

  render() {
    return (
      <div className="UpdatePhoto">
        Update Photo
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
        <label>
          Photo ID:
          <input
            name="photoID"
            type="text"
            value={this.state.photoID}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}

export default UpdatePhoto;
