import React from 'react';

const Footer = ({ address, name, text }) => {
  return (
    <footer>
      <small>{text}<a href={address} target='_blank' rel='noreffer'>{name}</a></small>
    </footer>
  );
}

export default Footer;