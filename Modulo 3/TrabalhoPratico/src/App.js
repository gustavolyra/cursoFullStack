import React, { Component } from 'react';
import Header from './components/header/Header';
import ControlBody from './components/body/ControlBody';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div>
          <ControlBody />
        </div>
      </div>
    );
  }
}
