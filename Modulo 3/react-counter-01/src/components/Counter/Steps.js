import React from 'react';
import css from './counter.module.css';

export default function Steps({ value }) {
  return <span className={css.counterValue}>({value})</span>;
}
