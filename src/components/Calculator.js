import React, { useEffect, useState } from 'react';
import Display from './Display';
import Controls from './Controls';
import math from '../modules/MathOperations';
import '../styles/Calculator.css';

const Calculator = () => {
  const [calculatorButtons] = useState(require('../modules/CalculatorButtons'));
  const [decimal, setDecimal] = useState(true);
  const [display, setDisplay] = useState();
  const [inputs, setInputs] = useState(['0']);
  const [operator, setOperator] = useState(false);

  // Updates display when inputs changes.
  useEffect(() => {
    setDisplay(inputs);
    console.log('inputs:', inputs);
  }, [inputs])

  const nonNumberInputs = (input) => {
    const updatedInputs = [...inputs];
    const getLastInput = inputs.at(-1)

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

// const Calculator = () => {
//   const [calculate, setCalculate] = useState(false);
//   const [calculatorButtons] = useState(require('../modules/CalculatorButtons'));
//   const [decimal, setDecimal] = useState(true);
//   const [display, setDisplay] = useState();
//   const [storedValues, setStoredValues] = useState([0]);

//   useEffect(() => {
//     setDisplay(storedValues);
//   }, [storedValues]);

//   useEffect(() => {
//     console.log('Calculate: ', calculate);
//   }, [calculate])

//   const handleCalculation = () => {
//     const orderOfOperation = ['*', '/', '+', '-'];
//     let newArray = storedValues;

//     orderOfOperation.forEach(operation => {
//       while (storedValues.includes(operation)) {
//         let operatorPosition = storedValues.findIndex(operator => operator === operation);
//         let getSum = handleOperator(parseFloat(storedValues[operatorPosition -1]), operation, parseFloat(storedValues[operatorPosition + 1]));

//         newArray.splice(operatorPosition -1, 3, getSum)
//       }
//     });
    
//     setStoredValues([...newArray]);
//   }

//   const handleControlInput = (value) => {
//     switch (value) {
//       case '-1':
//         console.log('HCI:', value);
//         updateLastValue(value);
//         break;
//       case '+':
//       case '-':
//       case '*':
//       case '/':
//         setStoredValues(arr => [...arr, value]);
//         setCalculate(false);
//         break;
//       case '=':
//         if (calculate) {
//           handleCalculation();
//         }
//         break;
//       case 'clear':
//         resetCalculator();
//         break;
//       case '.':
//         if (decimal) {
//           updateLastValue(value);
//         }
//         break;
//       default:
//         updateLastValue(value);
//         setCalculate(true);
//         break;
//     }
//   }

//   const handleOperator = (valueOne, operator, valueTwo) => {
//     switch (operator) {
//       case '+':
//         return math.add(valueOne, valueTwo);
//       case '-':
//         return math.subtract(valueOne, valueTwo);
//       case '*':
//         return math.multiple(valueOne, valueTwo);
//       case '/':
//         return math.divide(valueOne, valueTwo);
//     }
//   }

//   const resetCalculator = () => {
//     setCalculate(false);
//     setStoredValues([0]);
//   }

//   const updateLastValue = (value) => {
//     const newArray = [...storedValues];
//     const lastItem = newArray.at(-1);

//     switch (lastItem) {
//       case 0:
//         console.log('Case 0');
//         newArray[0] = value;
//         setStoredValues(newArray);
//         break;
//       case '-1':
//         console.log('ULV', math.plusNegative(lastItem));
//         // newArray[newArray.length - 1] = math.plusNegative(lastItem);
//         // setStoredValues(newArray);
//         break;
//       case '+':
//       case '-':
//       case '*':
//       case '/':
//         console.log('Case Ops');
//         setStoredValues(arr => [...arr, value]);
//         setDecimal(true);
//         break;         
//       default:
//         console.log('Case default', value, typeof value);
//         if (value === '.') {
//           setDecimal(false);
//         }

//         newArray[newArray.length - 1] = lastItem + value;
//         setStoredValues(newArray);
//         break
//     };
//   }

//   return (
//     <div className='calculator'>
//       <Display
//         display={display}
//       />
//       <Controls
//         buttons={calculatorButtons}
//         handleControlInput={handleControlInput}
//       />
//     </div>
//   );
// }

export default Calculator;