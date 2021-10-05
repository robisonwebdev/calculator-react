import React from 'react';
import Button from './Button';
import '../styles/Controls.css';

const Controls = ({ buttons, handleControlInput }) => {  
  const placeButtons = buttons.map(button => <Button key={button.name} btn={button.button} onClick={handleControlInput} value={button.value} />)

  return (
    <div className='controls'>
      {placeButtons}
    </div>
  );
}

export default Controls;