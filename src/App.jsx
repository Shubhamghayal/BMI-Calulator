import React, { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [message, setMessage] = useState('');

  function calculate() {
    const total = weight / ((height / 100) * (height / 100));
    setBmi(total);
    interpretBmi(total);
  }

  function interpretBmi(bmi) {
    if (bmi < 18.5) {
      setMessage('Underweight: BMI less than 18.5');
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setMessage('Normal weight: BMI 18.5–24.9');
    } else if (bmi >= 25 && bmi <= 29.9) {
      setMessage('Overweight: BMI 25–29.9');
    } else {
      setMessage('Obesity: BMI 30 or greater');
    }
  }

  return (
    <div className='container'>
      <h2>BMI Calculator</h2>
      <div>
        <label>Weight</label> <br />
        <input
          type="number"
          placeholder='eg. 45 in kg'
          onChange={(e) => {
            setWeight(e.target.value);
          }}
        /> <br /><br />

        <label>Height</label> <br />
        <input
          type="number"
          placeholder='eg. 170 in cm'
          onChange={(e) => {
            setHeight(e.target.value);
          }}
        /><br /><br />

        <button onClick={calculate}>Calculate BMI</button>

        <div className="result">
          {bmi ? `Your BMI Score is: ${bmi.toFixed(2)}` : ''}
        </div><br />

        <div className="message">
          {message}
        </div>

      </div>
    </div>
  );
}

export default App;
