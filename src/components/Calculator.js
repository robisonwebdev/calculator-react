import React, { useState } from 'react';
import Display from './Display';
import Controls from './Controls';
import '../styles/Calculator.css';

const Calculator = () => {
  const [calculatorButtons, setCalculatorButtons] = useState(require('../modules/CalculatorButtons'));

  return (
    <div className='calculator'>
      <Display />
      <Controls
        buttons={calculatorButtons}
      />
    </div>
  );
}

export default Calculator;