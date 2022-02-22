import React from 'react';
import '../App.css';

const Footer = (props) => {
  return (
  <div className="buttons">
        <button onClick={() => props.switchView(true)}>Home</button>
        <button onClick={() => props.switchView(false)}>YouTube</button>
  </div>
  );
};

export default Footer;
