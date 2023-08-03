import React, { useState } from 'react';
import './sharedAuthStyles.css';
import { useNavigate } from "react-router-dom";


const SignInComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    // Implement your sign-in logic here using the username and password state.
    // For example, you might have an authentication service to handle sign-in.

    // Assuming successful sign-in, redirect to the teacher home page
    navigate('/teacher-home');
    console.log('Sign In:', { username, password, rememberMe });
  };

  return (
    <div className="auth-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label>Remember me:</label>
          <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignInComponent;
