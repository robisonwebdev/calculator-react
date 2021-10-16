import React from 'react';
import '../styles/Display.css';

const Display = ({ display }) => {
  let arrayInputs = [...display];
  let displayArray = arrayInputs.map((input, index) => {
    // Puts no brackets around single negative number in array
    if (arrayInputs.length === 1 && input.charAt(0) === '-') {
      return <p key={index}>{input}</p>
    }

    // Puts bracket around negative number
    if (input.charAt(0) === '-' && input.length !== 1) {
      return <p key={index}>({input})</p>;
    }

    // Changes * to x
    if (input === '*') {
      return <p key={index}>x</p>;
    }

    // Changed / to ÷
    if (input === '/') {
      return <p key={index}>÷</p>
    }

    // Default return
    return <p key={index}>{input}</p>
  })

  return (
    <div className='display'>
      {displayArray}
    </div>
  );
}

export default Display;