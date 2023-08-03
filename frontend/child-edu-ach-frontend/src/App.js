import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
import TeacherHome from './components/TeacherHome';
import SignInComponent from './components/SignInComponent';

function App() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Router>
        <NavigationBar setShowSignIn={setShowSignIn} setShowSignUp={setShowSignUp} setIsLoggedIn= {setIsLoggedIn} isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={<Header showSignIn={showSignIn} showSignUp={showSignUp}/>} />
          <Route path="/teacher-home" element={<TeacherHome />} />
          <Route path="/sign-in" element={<SignInComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
