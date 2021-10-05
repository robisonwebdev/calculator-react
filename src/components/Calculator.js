import React, { useState } from 'react';
import Display from './Display';
import Controls from './Controls';
import '../styles/Calculator.css';

const Calculator = () => {
  const [calculatorButtons, setCalculatorButtons] = useState(require('../modules/CalculatorButtons'));
  const [display, setDisplay] = useState(0);

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

export default Calculator;