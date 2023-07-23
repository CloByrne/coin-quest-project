import React, { useState } from 'react';
import logo from '../images/coin_quest.png';
import { Link } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPiggyBank, faCartShopping, faMoneyBillTransfer, faRobot, faVideo } from '@fortawesome/free-solid-svg-icons'; // Import specific Font Awesome icons you need
import '../styles/Navbar.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <BootstrapNavbar className="nav" bg="light" expand="lg">
      <div className="logo-container">
        <a href="/">
          <img src={logo} alt="Coin Quest logo" className="logo" />
        </a>
      </div>

      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-links">
          {/* Show both words and icons on big screens */}
          <Nav.Link as={Link} to="/" className="navbar-link">
            <FontAwesomeIcon icon={faHome} />
            <span className="navbar-text">Home</span>
          </Nav.Link>
          <Nav.Link as={Link} to="/savings" className="navbar-link">
            <FontAwesomeIcon icon={faPiggyBank} />
            <span className="navbar-text">My Savings</span>
          </Nav.Link>
          <Nav.Link as={Link} to="/shopping" className="navbar-link">
            <FontAwesomeIcon icon={faCartShopping} />
            <span className="navbar-text">Shopping</span>
          </Nav.Link>
          <Nav.Link as={Link} to="/splitter" className="navbar-link">
            <FontAwesomeIcon icon={faMoneyBillTransfer} />
            <span className="navbar-text">Split Bill</span>
          </Nav.Link>
          <Nav.Link as={Link} to="/robot" className="navbar-link">
            <FontAwesomeIcon icon={faRobot} />
            <span className="navbar-text">Robot Database</span>
          </Nav.Link>
          <Nav.Link as={Link} to="/videos" className="navbar-link">
            <FontAwesomeIcon icon={faVideo} />
            <span className="navbar-text">Videos</span>
          </Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default Navbar;
