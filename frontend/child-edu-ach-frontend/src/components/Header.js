import React from 'react';
import BlenderAnimation from './BlenderAnimation';
import './Header.css'; // Import the CSS file for styling

const Header = () => {
  return (
    <header className="header-container">
        <div class="bg"></div>
<div class="bg bg2"></div>
<div class="bg bg3"></div>
<div class="content">
      <h1 className="welcome-text">Welcome</h1>
      <BlenderAnimation />
      </div>
    </header>
  );
};

export default Header;
