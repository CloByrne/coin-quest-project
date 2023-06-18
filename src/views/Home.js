import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
import '../styles/Home.css';

function Home() {
  const navigate = useNavigate();

  const navigateToSavings = () => {
    navigate('/Savings');
  };

  const navigateToShopping = () => {
    navigate('/Shopping');
  };

  const navigateToVideos = () => {
    navigate('/VideoPage');
  };

  return (
    <div className="main-container">
      <div className="home-container">
        <div className="home-text">
          <h1>Welcome to Coin Quest</h1>
          <div className="home-sub-text">
            <p>We offer a variety of resources and information to help you achieve your health and fitness goals</p>
          </div>
        </div>
      </div>
      <div className="home-body">
        <h2 className="home-subtitle">What would you like to do today</h2>
        <p className="home-paragraph">
          <Link to="/savings">Update My Savings</Link>
        </p>
        <p className="home-paragraph">
          <Link to="/shopping">Try out your budgeting skill in the shop</Link>
        </p>
        <p className="home-paragraph">
          <Link to="/learning">Learn about saving your money here!</Link>
        </p>
      </div>

      <div className="buttons">
        <div className="button" onClick={navigateToSavings}>
          <img src="savings-icon.png" alt="Savings" />
          <p>Savings</p>
        </div>
        <div className="button" onClick={navigateToShopping}>
          <img src="shopping-icon.png" alt="Shopping" />
          <p>Shopping</p>
        </div>
        <div className="button" onClick={navigateToVideos}>
          <img src="videos-icon.png" alt="Videos" />
          <p>Videos</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
