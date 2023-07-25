import React from 'react';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <div className="navigation-logo">Music Test</div>
      <div className="navigation-buttons">
        <button className="sign-in-button">Sign In</button>
        <button className="sign-up-button">Sign Up</button>
      </div>
    </div>
  );
};

export default NavigationBar;
