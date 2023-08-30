import React from 'react';
import BlenderAnimation from './BlenderAnimation';
import '../styles/Header.css'; // Import the CSS file for styling
import SignInComponent from './SignInComponent';
import SignUpComponent from './SignUpComponent';

const Header = ({ showSignIn, showSignUp }) => {
  return (
    <header className="header-container">
        <div class="bg"></div>
<div class="bg bg2"></div>
<div class="bg bg3"></div>
<div class="content">
{!showSignIn && !showSignUp &&<h1 className="welcome-text">Welcome</h1>}
      {showSignIn && <SignInComponent />} {/* Conditionally render SignInComponent */}
        {showSignUp && <SignUpComponent />} {/* Conditionally render SignUpComponent */}
        {!showSignIn && !showSignUp && <BlenderAnimation />} {/* Show BlenderAnimation by default */}
  
      </div>
    </header>
  );
};

export default Header;
