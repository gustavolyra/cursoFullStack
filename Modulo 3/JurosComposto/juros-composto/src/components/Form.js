import React from 'react';

export default function Form(props) {
  const { amount, rate, time, compoundInterest, onChange } = props;

  const handleChangeAmount = (event) => {
    const value = event.target.value;
    onChange(value, rate, time);
  };
  const handleChangeRate = (event) => {
    const value = event.target.value;
    onChange(amount, value, time);
  };
  const handleChangeTime = (event) => {
    const value = event.target.value;
    onChange(amount, rate, value);
  };

  return (
    <div>
      <span for="amount">Amount</span>
      <input
        id="amount"
        type="number"
        value={amount}
        onChange={handleChangeAmount}
      />

      <span for="rate">Rate</span>
      <input id="rate" type="number" value={rate} onChange={handleChangeRate} />

      <span for="time">Time</span>
      <input id="time" type="number" value={time} onChange={handleChangeTime} />
    </div>
  );
}
