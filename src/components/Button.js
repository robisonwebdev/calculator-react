import React from 'react';
import '../styles/Button.css';

const Button = ({ btn, onClick, value }) => {
  return (
    <button onClick={() => onClick(value)}>{btn}</button>
  );
}

export default Button;