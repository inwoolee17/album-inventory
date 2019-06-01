import React, { Component } from 'react';
import Routes from './Routes';
import './App.css';
import SimpleMenu from './Components/SimpleMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Mobile">
          <SimpleMenu />
        </div>
        {Routes}
      </div>
    );
  }
}

export default App;
