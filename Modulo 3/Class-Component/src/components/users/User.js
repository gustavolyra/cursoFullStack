import React from 'react';
import css from './user.module.css';

export default function User({ user }) {
  return (
    <div className={css.flexRow}>
      <img
        className={css.avatar}
        src={user.picture.large}
        alt={user.name.first}
      />
      <span>{user.name.first}</span>
    </div>
  );
}
