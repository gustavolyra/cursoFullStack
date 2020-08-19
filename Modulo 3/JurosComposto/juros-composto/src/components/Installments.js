import React from 'react';
import Installment from './Installment';

export default function Installments({ installments }) {
  return (
    <div className="row">
      {installments.map((month, index) => {
        return <Installment key={index} month={month} index={index} />;
      })}
    </div>
  );
}
