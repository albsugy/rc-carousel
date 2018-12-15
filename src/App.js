import React, { Component } from 'react';
import Carousel from './containers/Carousel'

import './App.scss';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Carousel />
        </header>
      </div>
    );
  }
}