import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import logo from './logo.svg';
import './App.css';
import Grid from './components/grid.js';
import {TurnButton} from './components/time.js';

window.reactown = window.reactown || {};
window.reactown.data = {};

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {
  executeGridActions() {
    this.refs.theGrid.doAllGridActions();
  }
  render() {
    let self = this;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
            <Grid ref="theGrid" size={5} />
        </div>
        <TurnButton onNextShmeek={this.executeGridActions.bind(self)} />
      </div>
    );
  }
}

export default App;
