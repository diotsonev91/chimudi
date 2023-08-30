import React from 'react';
import './ButtonStyles.css';

const Button = ({ text, type, onClick }) => {
  const buttonClassName = `button ${type}-button`;

  return (
    <button className={buttonClassName} onClick={onClick}>
    {text}
  </button>
  );
};

export default Button;
