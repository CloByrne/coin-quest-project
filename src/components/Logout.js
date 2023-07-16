import React from 'react';
import axios from 'axios';

const Logout = () => {
  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/logout');

      // Handle successful logout, e.g., clear local storage and redirect to login page
    } catch (error) {
      console.error('Failed to logout:', error);
      // Handle logout error, e.g., display error message
    }
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
