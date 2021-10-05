import React, { useState } from 'react';
import Button from './Button';
import '../styles/Controls.css';

const Controls = () => {
  const [calculatorButtons, setCalculatorButtons] = useState(require('../modules/CalculatorButtons'));
  const placeButtons = calculatorButtons.map(button => <Button key={button.name} btn={button.button} />)

  return (
    <div className='controls'>
      {placeButtons}
    </div>
  );
}

export default Controls;