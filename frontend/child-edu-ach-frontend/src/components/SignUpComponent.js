import React, { useState } from 'react';
import '../styles/sharedAuthStyles.css';
const SignUpComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [userType, setUserType] = useState('');
  const [guid, setGuid] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    // Implement your sign-up logic here using the form fields' state.
    console.log('Sign Up:', { username, password, repeatPassword, userType, guid });
  };

  return (
    <div className='auth-container'>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label>Repeat Password:</label>
          <input type="password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />
        </div>
        <div>
          <label>User Type:</label>
          <input type="text" value={userType} onChange={(e) => setUserType(e.target.value)} />
        </div>
        <div>
          <label>Enter GUID for Account:</label>
          <input type="text" value={guid} onChange={(e) => setGuid(e.target.value)} />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpComponent;
