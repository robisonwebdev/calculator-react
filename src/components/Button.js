import React from 'react';
import '../styles/Button.css';

const Button = ({ btn, onClick }) => {
  return (
    <button onClick={() => console.log(onClick)}>{btn}</button>
  );
}

export default Button;