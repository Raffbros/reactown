import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import logo from './logo.svg';
import './App.css';
import Grid from './components/grid.js';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
            <Grid size={5} />
        </div>
      </div>
    );
  }
}

export default App;
