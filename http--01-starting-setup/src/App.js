import React, { Component } from 'react';

import {BrowserRouter as Router} from 'react-router-dom';

import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      // <Router basename="/my-app">
      <Router basename="/my-app">
      <div className="App">
        <Blog />
      </div>
      </Router>
    );
  }
}

export default App;
