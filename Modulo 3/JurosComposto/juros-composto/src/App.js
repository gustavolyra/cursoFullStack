import React, { useState, useEffect } from 'react';
import './App.css';
import { calc } from './helpers/calcCompoundInterest';
import Form from './components/Form';

function App() {
  const [amount, setAmount] = useState(0);
  const [rate, setRate] = useState(0);
  const [time, setTime] = useState(0);
  const [compoundInterest, setCompoundInterest] = useState([]);

  useEffect(() => {
    const calcCompound = () => {
      if (amount > 0 && rate > 0 && time > 0) {
        const newValues = calc(amount, rate, time);
        setCompoundInterest(newValues);
        console.log(compoundInterest);
      }
    };
    calcCompound();
  }, [amount, rate, time, compoundInterest]);

  const handleChangeInput = (newAmount, newRate, newTime) => {
    setAmount(newAmount);
    setRate(newRate);
    setTime(newTime);
  };

  return (
    <div className="App">
      <h1>React - Juros Compostos</h1>
      <div className="container">
        <Form
          amount={amount}
          rate={rate}
          time={time}
          compoundInterest={compoundInterest}
          onChange={handleChangeInput}
        />
        <button className="waves-effect waves-light btn"></button>
      </div>
    </div>
  );
}

export default App;
