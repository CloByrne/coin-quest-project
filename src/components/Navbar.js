import React, { useState } from 'react';
import logo from '../images/coin_quest.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const renderLoginButton = () => {
    if (isAuthenticated) {
      return <button onClick={handleLogout}>Log Out</button>;
    } else {
      return <Link to="/login">Log In</Link>;
    }
  };

  const handleLogout = () => {
    // Perform logout logic
    setIsAuthenticated(false);
  };

  return (
    <nav className="nav">
      <div className="logo-container">
        <a href="/">
          <img src={logo} alt="Coin Quest logo" width="300" />
        </a>
      </div>

      <ul className="navbar-links">
        <li className="nav-link">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-link">
          <Link to="/savings">My Savings</Link>
        </li>
        <li className="nav-link">
          <Link to="/store">Shopping</Link>
        </li>
        <li className="nav-link">
          <Link to="/videoPage">Videos</Link>
        </li>
        {isAuthenticated ? (
          <li>
            <button onClick={handleLogout}>Log out</button>
          </li>
        ) : (
          <li>
            <Link to="/login">Log in</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
