import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Login.css';

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loginError, setLoginError] = useState('');

  const onSubmit = async (data) => {
    const { username, password } = data;
  
    try {
      const response = await axios.post('http://localhost:3000/api/login', { username, password });

      // Get the token from the response
      const token = response.data.token;

      // Store the token in local storage or in the state management system
      localStorage.setItem('token', token);
  
      // Redirect to the protected savings page
      navigate('/savings');
    } catch (error) {
      // Handle specific error message from the server
      if (error.response && error.response.data && error.response.data.message) {
        setLoginError(error.response.data.message);
      } else {
        setLoginError('An error occurred during login');
      }
    }
  };
  
  

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form className="login-form-container" onSubmit={handleSubmit(onSubmit)}>
        <div className="login-form-group">
          <div className="login-text-container">
            <label>Username</label>
            <input type="text" {...register('username', { required: true })} />
            {errors.username && <span>This field is required</span>}
          </div>
        </div>
        <div className="login-form-group">
          <div className="login-text-container">
            <label>Password</label>
            <input type="password" {...register('password', { required: true })} />
            {errors.password && <span>This field is required</span>}
          </div>
        </div>
        {loginError && <span>{loginError}</span>}
        <button type="submit">Login</button>
      </form>

      <p>Don't have an account? <Link to="/register">Register</Link></p>
    </div>
  );
};

export default Login;