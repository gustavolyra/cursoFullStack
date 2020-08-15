import React, { Component } from 'react';

export default class InfoBar extends Component {
  render() {
    return (
      <div className={this.props.cssClass}>
        <span>{this.props.text}</span>
        <input
          className={this.props.cssClass}
          value={this.props.value}
          disabled
        />
      </div>
    );
  }
}
