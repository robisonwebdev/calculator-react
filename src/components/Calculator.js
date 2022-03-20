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
  }, [inputs])

  // Update inputs to zero, if length is 1 and empty string
  useEffect(() => {
    if (inputs.length === 1 && inputs[0] === '') {
      setInputs(['0']);
    }
  }, [inputs])

  // Keyboard listener
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
 
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  })

  const handleKeyPress = (event) => {
    const key = event.key;
    // Keyboard numbers inputs
    if (key >= 0 && key <= 9) {
      numberInputs(key);
    }

    // Keyboard nonNumber inputs
    if (key === '/' || key === '*' || key === '+' || key === '-' || key === '.' || key ==='%') {
      nonNumberInputs(key);
    }

    // Keyboard backspace
    if (key === 'Backspace') {
      nonNumberInputs('back');
    }

    // Keyboard equal/Enter
    if (key === '=' || key === 'Enter') {
      nonNumberInputs('calculate');
    }

    // Keyboard delete/clear
    if (key === 'Delete') {
      nonNumberInputs('clear');
    }

    // Keyboard plus/Negative
    if (key === '!') {
      nonNumberInputs('-1');
    }
  }

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
      default:
        return null;
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
    if (input === 'calculate' && operator === true) {
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
    <section className='calculator'>
      <Display
        display={display}
      />
      <Controls
        buttons={calculatorButtons}
        userInput={userInput}
      />
    </section>
  );
}

export default Calculator;