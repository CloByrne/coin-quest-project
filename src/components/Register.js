import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');
  
    if (password !== passwordConfirmation) {
      setError('The two passwords do not match');
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:3000/users', {
        username,
        password,
      });
      
      setSuccessMessage('User registered successfully');;
      console.log(response.data);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        setError(error.response.data.errors[0]);
      } else {
        setError('An error occurred. Please try again.'); // Fallback error message
      }
    }
  };
  

  return (
    <div className="register-container">
      <h1>Register</h1>
      <form className="register-form-container" onSubmit={handleSubmit}>
        <div className="register-form-group">
          <p>Enter a username that you will use to log in and save your work</p>
          <div className="register-text-container">
            <label>Username</label>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
        </div>
        <div className="register-form-group">
        <p>Pick a password for the next time you log in</p>
          <div className="register-text-container">
            
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
        </div>
        <div className="register-form-group">
          <div className="register-text-container">
            <label>Confirm Password</label>
            <input
              type="password"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </div>
        </div>
        <button type="submit">Register</button>
      </form>
      <p>Already registered? <Link to="/login">Log in</Link></p>
      {error && <p>{error}</p>}
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default Register;
