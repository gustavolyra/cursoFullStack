import React, { useState, useEffect } from 'react';
import './App.css';
import { calc } from './helpers/calcCompoundInterest';
import Form from './components/Form';
import Installments from './components/Installments';

function App() {
  const [amount, setAmount] = useState(1);
  const [rate, setRate] = useState(1);
  const [time, setTime] = useState(1);
  const [compoundInterest, setCompoundInterest] = useState([]);

  useEffect(() => {
    const calcCompound = () => {
      if (amount > 0 && rate !== 0 && time > 0) {
        let newValues = calc(amount, rate, time);
        setCompoundInterest(newValues);
      }
    };
    calcCompound();
  }, [amount, rate, time]);

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
        <Installments installments={compoundInterest} />
      </div>
    </div>
  );
}

export default App;
