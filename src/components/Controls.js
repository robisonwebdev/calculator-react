import React from 'react';
import Button from './Button';
import '../styles/Controls.css';

const Controls = () => {
  const number = 20;

  const placeButtons = [...Array(number)].map(e => <Button />)

  return (
    <div className='controls'>
      {placeButtons}
    </div>
  );
}

export default Controls;