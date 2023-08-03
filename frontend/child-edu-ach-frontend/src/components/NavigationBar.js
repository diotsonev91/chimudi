import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './NavigationBar.css';
import { useState } from 'react';

const NavigationBar = ({ setShowSignIn, setShowSignUp, setIsLoggedIn, isLoggedIn }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const handleSignInClick = () => {
    setShowSignIn(true);
    setShowSignUp(false);
  };

  const handleSignUpClick = () => {
    setShowSignUp(true);
    setShowSignIn(false);
  };

  const isTeacherHome = location.pathname === '/teacher-home';

  if(isTeacherHome)
    setIsLoggedIn(true);
  else{
    setIsLoggedIn(false);
  }
  
  const takeHome = () => {
    setShowSignUp(false);
    setShowSignIn(false);

    // Check if the user is logged in by any means (e.g., checking user session)
    setIsLoggedIn(false)//localStorage.getItem('isLoggedIn');

    if (isLoggedIn) {
      // Perform the sign-out logic here
      localStorage.removeItem('isLoggedIn'); // Remove the user session data
      navigate('/'); // Navigate to the home page (initial state) after signing out
    }
  };

  return (
    <div className="navigation-bar">
      {!isLoggedIn && <div className="navigation-logo" onClick={takeHome}>
        Music Test
      </div>}
      <div className="navigation-buttons">
        {!isTeacherHome && (
          <>
            <button className="sign-in-button" onClick={handleSignInClick}>
              Sign In
            </button>
            <button className="sign-up-button" onClick={handleSignUpClick}>
              Sign Up
            </button>
          </>
        )}
        {isTeacherHome && (
          <>
            <Link to="/exercises" className="nav-link">
              Exercises
            </Link>
            <Link to="/diagnostic" className="nav-link">
              Diagnostic
            </Link>
            <Link to="/results" className="nav-link">
              Results
            </Link>
            <button className="sign-out-button" onClick={takeHome}>
              Sign Out
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
