import React, { Component } from 'react';

export default class InfoBar extends Component {
  render() {
    return (
      <div>
        <span>{this.props.text}</span>
        <input value={this.props.value} disabled />
      </div>
    );
  }
}
