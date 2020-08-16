import React, { useState } from 'react';

const BAND_MEMBERS = [
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
];

export default function Band() {
  const [bandMembers] = useState(BAND_MEMBERS);
  const [bandName] = useState('Rush');
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
