import React, { useEffect, useState } from 'react';
import Display from './Display';
import Controls from './Controls';
import math from '../modules/MathOperations';
import '../styles/Calculator.css';

const Calculator = () => {
  const [calculatorButtons] = useState(require('../modules/CalculatorButtons'));
  const [display, setDisplay] = useState();
  const [inputs, setInputs] = useState(['0']);

  return (
    <div className='calculator'>
      <Display
        display={display}
      />
      <Controls
        buttons={calculatorButtons}
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