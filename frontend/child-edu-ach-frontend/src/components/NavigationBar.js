import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/NavigationBar.css';
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

  //TO FIX FROM HERE !!!
  //TODO: AUTHENTICATION AND SESSION
  const isTeacherHome = location.pathname === '/teacher-home';
  const isExcercisePage = location.pathname === '/exercises';

  if(isTeacherHome || isExcercisePage)
    setIsLoggedIn(true);
  else{
    setIsLoggedIn(false);
  }
  
  // THE ABOVE LINES TO BE FIXED !!!

  const takeHome = () => {
    setShowSignUp(false);
    setShowSignIn(false);

    // Check if the user is logged in by any means (e.g., checking user session)
    setIsLoggedIn(localStorage.getItem('isLoggedIn'));

    if (isLoggedIn) {
      // Perform the sign-out logic here
      localStorage.removeItem('isLoggedIn'); // Remove the user session data
      navigate('/'); // Navigate to the home page (initial state) after signing out
    }
  };
  console.log(isExcercisePage )
  console.log("----------------b")
  console.log(isLoggedIn )
  return (
    <div className="navigation-bar">
      {!isLoggedIn && <div className="navigation-logo" onClick={takeHome}>
        Music Test
      </div>}
      {!isLoggedIn && (
          <div className="navigation-buttons">
          <>
            <button className="sign-in-button" onClick={handleSignInClick}>
              Sign In
            </button>
            <button className="sign-up-button" onClick={handleSignUpClick}>
              Sign Up
            </button>
          </>
          </div>
        )}
        {isTeacherHome && (
          <>
          <div className="navigation-buttons">
            <Link to="/exercises" className="nav-link">
              Exercises
            </Link>
            <Link to="/Lessons" className="nav-link">
              Lessons
            </Link>
            <Link to="/results" className="nav-link">
              Results
            </Link>
            </div>
            <div className="sign-out-container">
            <button className="sign-out-button" onClick={takeHome}>
              Sign Out
            </button>
            </div>
          </>
        )}
        {
          isExcercisePage && (
            <>
            <div className="navigation-buttons">
            <Link to="/teacher-home" className="nav-link">
            Back to teacher page
          </Link>
          </div>
          <div className="sign-out-container">
          <button className="sign-out-button" onClick={takeHome}>
            Sign Out
          </button>
          </div>
          </>
          )
        }
      </div>
  );
};

export default NavigationBar;
