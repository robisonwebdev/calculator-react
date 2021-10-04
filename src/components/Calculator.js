import React from 'react';
import Display from './Display';
import Controls from './Controls';
import '../styles/Calculator.css';

const Calculator = () => {
  return (
    <div className='calculator'>
      <Display />
      <Controls />
    </div>
  );
}

export default Calculator;