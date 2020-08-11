import React, { Component } from 'react';

export default class Band extends Component {
  constructor() {
    super();

    this.state = {
      bandName: 'Rush',
      bandMembers: [
        {
          id: 1,
          name: 'Neil',
          instrument: 'Bateria',
        },
        {
          id: 2,
          name: 'Alex',
          instrument: 'Guitarra',
        },
        {
          id: 3,
          name: 'Geddy',
          instrument: 'Baixo',
        },
      ],
    };
  }

  render() {
    const { bandMembers, bandName } = this.state;
    return (
      <div>
        <h5>{bandName}</h5>
        {bandMembers.map(({ id, name, instrument }) => {
          return (
            <ul key={id}>
              <li>{name}</li>
              <li>{instrument}</li>
            </ul>
          );
        })}
      </div>
    );
  }
}
