import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
import '../styles/Home.css';
import savingsIcon from '../images/savings-icon.png';
import shoppingIcon from '../images/shopping-icon.png';
import videoIcon from '../images/video-icon.png';

function Home() {
  const navigate = useNavigate();

  const navigateToSavings = () => {
    navigate('/Savings');
  };

  const navigateToStore = () => {
    navigate('/Store');
  };

  const navigateToVideos = () => {
    navigate('/VideoPage');
  };

  return (
    <div className="main-container">
      <div className="home-container">
        <h1>Welcome to Coin Quest Academy</h1>
        <div className="home-sub-text">
          <p>Welcome to Coin Quest Academy where you can learn about the importance of saving your money and the impact of spending</p>
        </div>
      </div>

      <div className="home-body">
        <h2 className="home-subtitle">What would you like to do today?</h2>
      </div>

      <div className="buttons">
        <div className="button" onClick={navigateToSavings}>
          <Link to="/savings">
            <img src={savingsIcon} alt="Savings" />
            <p>Update My Savings</p>
          </Link>
        </div>
        <div className="button" onClick={navigateToStore}>
          <Link to="/store">
            <img src={shoppingIcon} alt="Shopping" />
            <p>Try out your budgeting skill in the shop</p>
          </Link>
        </div>
        <div className="button" onClick={navigateToVideos}>
          <Link to="/learning">
            <img src={videoIcon} alt="Videos" />
            <p>Learn about saving your money here!</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;