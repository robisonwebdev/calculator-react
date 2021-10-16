import React from 'react';
import '../styles/Display.css';

const Display = ({ display }) => {
  let arrayInputs = [...display];
  let displayArray = arrayInputs.map((input, index) => <p key={index}>{input}</p>)

  return (
    <div className='display'>
      {displayArray}
    </div>
  );
}

export default Display;