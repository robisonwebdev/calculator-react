import React from 'react';
import '../styles/Button.css';

const Button = ({ className, btn, onClick, value }) => {
  return (
    <button className={className} onClick={() => onClick(value)}>{btn}</button>
  );
}

export default Button;