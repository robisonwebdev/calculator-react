import React from 'react';
import '../styles/Header.css';

const Header = ({ text }) => {
  return (
    <header>
      <h1>{text}</h1>
    </header>
  );
}

export default Header;