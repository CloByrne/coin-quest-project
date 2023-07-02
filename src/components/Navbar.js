import React from 'react';
import logo from '../images/coin_quest.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="logo-container">
        <a href="/">
          <img src={logo} alt="Project Fitness logo" width="300" />
        </a>
      </div>
      
      <ul className="navbar-links">
        <CustomLink href="/">Home</CustomLink>
        <CustomLink href="/Savings">My Savings</CustomLink>
        <CustomLink href="/Shopping">Shopping</CustomLink>
        <CustomLink href="/VideoPage">Videos</CustomLink>
      </ul>

      <div className="login-button-container">
      <Link to="/login" className="login-button">Log In</Link>
      </div>
    </nav>
  );
}

function CustomLink({ href, children }) {
  const path = window.location.pathname;

  return (
    <li className={`nav-link ${path === href ? 'active' : ''}`}>
      <a href={href}>{children}</a>
    </li>
  );
}
