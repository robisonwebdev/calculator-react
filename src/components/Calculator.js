import React, { useState } from 'react';
import Display from './Display';
import Controls from './Controls';
import math from '../modules/MathOperations';
import '../styles/Calculator.css';

const Calculator = () => {
  const [calculatorButtons, setCalculatorButtons] = useState(require('../modules/CalculatorButtons'));
  const [display, setDisplay] = useState('0');
  const [operator, setOperator] = useState(null);
  const [storedValues, setStoredValues] = useState([]);
  const [sum, setSum] = useState(0);
  const [valueOne, setValueOne] = useState(0);
  const [valueTwo, setValueTwo] = useState(0);

  const handleControlInput = (value) => {
    const number = value.toString();

    if (typeof(value) === 'number') {
      if (display === '0') {
        setDisplay(number);
      } else {
        setDisplay(display + number);
      }
    }

    if (value === '+' || value === '-' || value === '×' || value === '/') {
      setDisplay(`${display} ${value} `);
    }
    // setDisplay(input);
  }

  const handleOperator = (valueOne, operator, valueTwo) => {
    switch (operator) {
      case '+':
        setSum(math.add(valueOne, valueTwo));
        break;
      case '-':
        setSum(math.subtract(valueOne, valueTwo));
        break;
      case '*':
        setSum(math.multiple(valueOne, valueTwo));
        break;
      case '/':
        setSum(math.divide(valueOne, valueTwo));
        break;
    }
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