import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loginError, setLoginError] = useState('');
  const [csrfToken, setCsrfToken] = useState('');

  useEffect(() => {
    // Fetch the CSRF token from the server
    const fetchCsrfToken = async () => {
      try {
        const response = await axios.get('/csrf-token');
        setCsrfToken(response.data.csrfToken);
      } catch (error) {
        console.error('Failed to fetch CSRF token:', error);
      }
    };

    fetchCsrfToken();
  }, []);

  const onSubmit = async (data) => {
    const { username, password } = data;

    try {
      const response = await axios.post('/login', {
        username,
        password
      }, {
        headers: {
          'X-CSRF-Token': csrfToken // Include the CSRF token in the request headers
        }
      });

      // Assuming the backend returns a JWT token
      const token = response.data.token;

      // Store the token locally (e.g., in local storage)
      localStorage.setItem('token', token);

      // Redirect to protected route or home page
      window.location.href = '/protected'; // Redirect using JavaScript
    } catch (error) {
      setLoginError('Invalid username or password');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Username</label>
          <input type="text" {...register('username', { required: true })} />
          {errors.username && <span>This field is required</span>}
        </div>
        <div>
          <label>Password</label>
          <input type="password" {...register('password', { required: true })} />
          {errors.password && <span>This field is required</span>}
        </div>
        {loginError && <span>{loginError}</span>}
        <button type="submit">Login</button>
      </form>

      <p>Don't have an account? <Link to="/register">Register</Link></p>
    </div>
  );
};

export default Login;
