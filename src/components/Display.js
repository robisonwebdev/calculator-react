import React from 'react';
import '../styles/Display.css';

const Display = ({ display }) => {
  let arrayInputs = [...display];
  let displayArray = arrayInputs.map((input, index) => {
    return (input.charAt(0) === '-' && input.length !== 1) ? <p key={index}>({input})</p> : <p key={index}>{input}</p>;
  })

  return (
    <div className='display'>
      {displayArray}
    </div>
  );
}

export default Display;