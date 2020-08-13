import React, { Component } from 'react';

export default class InputBar extends Component {
  handleChange = (event) => {
    const value = event.target.value;
    this.props.onFilterChange(value);
  };

  render() {
    return (
      <div>
        <span>Salário bruto</span>
        <input
          type="number"
          min="1000"
          onChange={this.handleChange}
          value={this.props.value}
          placeholder="Entre com o valor do salário bruto para realizar os cálculos"
        />
      </div>
    );
  }
}
