import React from 'react';
import Button from './Button';
import '../styles/Controls.css';

const Controls = ({ buttons, userInput }) => {  
  const placeButtons = buttons.map(button => <Button key={button.name} className={button.class} btn={button.button} onClick={userInput} value={button.value} />)

  return (
    <section className='controls'>
      {placeButtons}
    </section>
  );
}

export default Controls;