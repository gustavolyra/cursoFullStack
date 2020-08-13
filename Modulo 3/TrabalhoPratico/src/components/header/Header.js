import React, { Component } from 'react';
import css from './header.module.css';
export default class Header extends Component {
  render() {
    return <h1 className={css.header}>React Salário</h1>;
  }
}
