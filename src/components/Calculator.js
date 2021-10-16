import React, { useEffect, useState } from 'react';
import Display from './Display';
import Controls from './Controls';
import math from '../modules/MathOperations';
import '../styles/Calculator.css';

const Calculator = () => {
  const [calculatorButtons] = useState(require('../modules/CalculatorButtons'));
  const [decimal, setDecimal] = useState(true);
  const [display, setDisplay] = useState([]);
  const [inputs, setInputs] = useState(['0']);
  const [operator, setOperator] = useState(false);

  // Updates display when inputs changes.
  useEffect(() => {
    setDisplay(inputs);
    console.log('inputs:', inputs);
  }, [inputs])

  // Update inputs to zero, if length is 1 and empty string
  useEffect(() => {
    if (inputs.length === 1 && inputs[0] === '') {
      setInputs(['0']);
    }
  }, [inputs])

  const calculate = () => {
    const orderOfOperations = ['*', '/', '+', '-'];
    const newArray = [...inputs];

    orderOfOperations.forEach(operation => {
      while (newArray.includes(operation)) {
        let operatorPosition = newArray.findIndex(operator => operator === operation);
        let getSum = handleOperator(parseFloat(newArray[operatorPosition -1]), operation, parseFloat(newArray[operatorPosition + 1]));

        newArray.splice(operatorPosition -1, 3, getSum);
      }
    })

    setInputs([`${newArray[0]}`]);
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

  const nonNumberInputs = (input) => {
    const updatedInputs = [...inputs];
    const getLastInput = inputs.at(-1);

    // Back Button
    if (input === 'back') {
      if (getLastInput === '') {
        updatedInputs.splice(-2, 2);
        setOperator(true);
      } else {
        // Check for decimal
        if (getLastInput.charAt(getLastInput.length - 1) === '.') {
          setDecimal(true);
        }
        updatedInputs[updatedInputs.length - 1] = getLastInput.slice(0, -1);
      }

      setInputs(updatedInputs);
    }

    // Equal Button
    if (input === 'calculate') {
      calculate();
    }

    // Clear Button
    if (input === 'clear') {
      setDecimal(true);
      setInputs(['0']);
      setOperator(false);
    }

    // Decimal Button
    if (input === '.' && decimal === true) {
      updatedInputs[updatedInputs.length - 1] = getLastInput + input;
      setInputs(updatedInputs);
      setDecimal(false);
    }

    // Operation Buttons
    if ((input === '/' || input === '*' || input === '-' || input === '+') && operator) {
      updatedInputs.push(input);
      updatedInputs.push('');
      setInputs(updatedInputs);
      setOperator(false);
      setDecimal(true);
    }

    // Percentage Button
    if (input === '%') {
      const newValue = math.percentage(getLastInput);

      updatedInputs[updatedInputs.length - 1] = newValue.toString();
      setInputs(updatedInputs);
    }

    // Plus/Negative Button
    if (input === '-1') {
      const newValue = math.plusNegative(getLastInput);

      updatedInputs[updatedInputs.length - 1] = newValue.toString();
      setInputs(updatedInputs);
    }
  }

  const numberInputs = (input) => {
    const number = input.toString();
    const updatedInputs = [...inputs];
    const getLastInput = inputs.at(-1);

    if (inputs.length === 1 && getLastInput === '0') {
      setInputs(number);
      setOperator(true);
    } else {
      updatedInputs[updatedInputs.length - 1] = getLastInput + number;
      setInputs(updatedInputs);
      setOperator(true);
    }
  }

  const userInput = (input) => {
    // Ternary to determine which function to run based on input type.
    return typeof input === 'number' ? numberInputs(input) : nonNumberInputs(input);
  }

  return (
    <div className='calculator'>
      <Display
        display={display}
      />
      <Controls
        buttons={calculatorButtons}
        userInput={userInput}
      />
    </div>
  );
}

export default Calculator;