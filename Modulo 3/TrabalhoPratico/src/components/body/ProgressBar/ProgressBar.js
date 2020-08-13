import React, { Component } from 'react';
import css from './progressBar.module.css';
export default class ProgressBar extends Component {
  render() {
    return (
      <div className={css.progressBar}>
        <div className={css.fullBar}></div>
        <div
          className={css.p1Bar}
          style={{ width: this.props.progressBar1 + '%' }}
        ></div>
        <div
          className={css.p2Bar}
          style={{ width: this.props.progressBar2 + '%' }}
        ></div>
      </div>
    );
  }
}
