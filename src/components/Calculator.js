import React, { useEffect, useState } from 'react';
import Display from './Display';
import Controls from './Controls';
import math from '../modules/MathOperations';
import '../styles/Calculator.css';

const Calculator = () => {
  const [calculate, setCalculate] = useState(false);
  const [calculatorButtons] = useState(require('../modules/CalculatorButtons'));
  const [display, setDisplay] = useState();
  const [storedValues, setStoredValues] = useState([0]);

  useEffect(() => {
    setDisplay(storedValues);
  }, [storedValues]);

  useEffect(() => {
    console.log('Calculate: ', calculate);
  }, [calculate])

  const handleCalculation = () => {
    let newArray = storedValues;

    while (storedValues.length !== 1) {
      if (storedValues.findIndex(element => element === '*') !== -1) {
        let operatorPosition = storedValues.findIndex(element => element === '*');
        let newValue = handleOperator(parseFloat(storedValues[operatorPosition -1]), '*', parseFloat(storedValues[operatorPosition + 1]));

        newArray.splice(operatorPosition -1, 3, newValue);
      } else if (storedValues.findIndex(element => element === '/') !== -1) {
        let operatorPosition = storedValues.findIndex(element => element === '/');
        let newValue = handleOperator(parseFloat(storedValues[operatorPosition -1]), '/', parseFloat(storedValues[operatorPosition + 1]));

        newArray.splice(operatorPosition -1, 3, newValue);
      }
    }
    
    setStoredValues(newArray);
  }

  const handleControlInput = (value) => {
    const number = value.toString();

    switch (value) {
      case '+':
      case '-':
      case '*':
      case '/':
        setStoredValues(arr => [...arr, value]);
        setCalculate(false);
        break;
      case '=':
        if (calculate) {
          handleCalculation();
        }
        break;
      case 'clear':
        resetCalculator();
        break;
      default:
        updateLastValue(number);
        setCalculate(true);
        break;
    }
  }

  const handleOperator = (valueOne, operator, valueTwo) => {
    switch (operator) {
      case '+':
        return math.add(valueOne, valueTwo);
      case '-':
        return math.subtract(valueOne, valueTwo);
      case '*':
        return math.multiple(valueOne, valueTwo);
      case '/':
        return math.divide(valueOne, valueTwo);
    }
  }

  const resetCalculator = () => {
    setCalculate(false);
    setStoredValues([0]);
  }

  const updateLastValue = (value) => {
    const newArray = [...storedValues];
    const lastItem = newArray.at(-1);

    if (lastItem === 0) {
      newArray[0] = value;
      setStoredValues(newArray);
    } else if (lastItem === '+' || lastItem === '-' || lastItem === '*' || lastItem === '/')  {
      setStoredValues(arr => [...arr, value]);
    } else {
      newArray[newArray.length - 1] = lastItem + value;
      setStoredValues(newArray);
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