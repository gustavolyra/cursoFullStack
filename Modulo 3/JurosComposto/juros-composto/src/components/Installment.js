import React from 'react';

export default function Installment({ month, index }) {
  return (
    <div className="col s4 m1" style={styles.container}>
      <span style={styles.span}>Mês {index + 1}</span>
      <ul className="list">
        <li>{month.amountAccumulated}</li>
        <li>{month.amountDifference}</li>
        <li>{month.rateAccumulated}</li>
      </ul>
    </div>
  );
}

const styles = {
  container: {
    margin: '0px',
    padding: '5px',
    borderStyle: 'solid',
    borderRadius: '20px',
  },
  span: {
    margin: '10px',
    fontSize: '15px',
  },
};
