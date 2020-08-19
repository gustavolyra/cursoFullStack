import React from 'react';

export default function Form(props) {
  const { amount, rate, time, onChange } = props;

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
    <div className="row">
      <div className="col s12 m4">
        <span htmlFor="amount">Amount</span>
        <input
          id="amount"
          type="number"
          value={amount}
          onChange={handleChangeAmount}
        />
      </div>

      <div className="col s12 m4">
        <span htmlFor="rate">Rate</span>
        <input
          id="rate"
          type="number"
          value={rate}
          onChange={handleChangeRate}
        />
      </div>

      <div className="col s12 m4">
        <span htmlFor="time">Time</span>
        <input
          id="time"
          type="number"
          value={time}
          onChange={handleChangeTime}
        />
      </div>
    </div>
  );
}
