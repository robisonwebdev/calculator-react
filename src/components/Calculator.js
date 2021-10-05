import React, { useState } from 'react';
import Display from './Display';
import Controls from './Controls';
import '../styles/Calculator.css';

const Calculator = () => {
  const [calculatorButtons, setCalculatorButtons] = useState(require('../modules/CalculatorButtons'));
  const [display, setDisplay] = useState('0');

  const handleControlInput = (value) => {
    const number = value.toString();

    if (typeof(value) === 'number') {
      if (display === '0') {
        setDisplay(number);
      } else {
        setDisplay(display + number);
      }
    } else {
      console.log('No input!');
    }
    // setDisplay(input);
  }

  return (
    <div className='calculator'>
      <Display
        display={display}
      />
      <Controls
        buttons={calculatorButtons}
        handleControlInput={handleControlInput}
      />
    </div>
  );
}

export default Calculator;