import React, { useEffect, useState } from 'react';
import Display from './Display';
import Controls from './Controls';
import math from '../modules/MathOperations';
import '../styles/Calculator.css';

const Calculator = () => {
  const [calculate, setCalculate] = useState(false);
  const [calculatorButtons, setCalculatorButtons] = useState(require('../modules/CalculatorButtons'));
  const [display, setDisplay] = useState('0');
  const [operator, setOperator] = useState(null);
  const [storedValues, setStoredValues] = useState([0]);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    setDisplay(storedValues);
  }, [storedValues]);

  useEffect(() => {

  }, [calculate])

  const handleControlInput = (value) => {
    const number = value.toString();   

    if (value === '+' || value === '-' || value === '×' || value === '/') {
      setStoredValues(arr => [...arr, value]);
    } else {
      updateLastValue(number);
    }
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

  const updateLastValue = (value) => {
    const newArray = [...storedValues];
    const lastItem = newArray.at(-1);

    if (lastItem === 0) {
      newArray[0] = value;
      setStoredValues(newArray);
    } else if (lastItem === '+' || lastItem === '-' || lastItem === '×' || lastItem === '/')  {
      setStoredValues(arr => [...arr, value]);
    } else {
      newArray[newArray.length - 1] = lastItem + value;
      setStoredValues(newArray);
    }
  }

  return (
    <div className='calculator'>
      {console.log(storedValues)}
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