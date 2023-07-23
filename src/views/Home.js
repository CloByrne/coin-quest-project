import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
import '../styles/Home.css';
import savingsIcon from '../images/savings-icon.png';
import shoppingIcon from '../images/shopping-icon.png';
import videoIcon from '../images/video-icon.png';
import billIcon from '../images/bill-icon.png';
import creaturesIcon from '../images/creatures-icon.png';

function Home() {
  const navigate = useNavigate();

  const navigateToSavings = () => {
    navigate('/savings');
  };

  const navigateToStore = () => {
    navigate('/shopping');
  };

  const navigateToVideos = () => {
    navigate('/videos');
  };

  const navigateToSplitter = () => {
    navigate('/splitter');
  };

  const navigateToCreatures = () => {
    navigate('/robot');
  };

  return (
    <div className="main-container-home">
      <div className="home-container">
        <h1>Welcome to Coin Quest Academy</h1>
        <div className="home-sub-text">
          <p>Welcome to Coin Quest Academy where you can learn about the importance of saving your money and the impact of spending</p>
        </div>
      </div>

      <div className="home-body">
      <div className="container-with-h2">
        <h2 className="home-subtitle">What would you like to do today?</h2>
        </div>
      </div>
      <div className="buttons-main-container">
      <div className="buttons">
        <div className="button" onClick={navigateToSavings}>
          <Link to="/savings">
            {/* Savings Icon - https://www.freepik.com/free-icon/dollars-money-bag-hand_792378.htm */}
            <img src={savingsIcon} alt="Savings" />
            <p>Update My Savings</p>
          </Link>
        </div>
        <div className="button" onClick={navigateToStore}>
          <Link to="/shopping">
            {/* Shopping Icon - https://www.freepik.com/icon/shopping-cart_3144456#position=2&page=1&term=shopping-cart&fromView=keyword*/}
            <img src={shoppingIcon} alt="Shopping" />
            <p>Try out your budgeting skill in the shop</p>
          </Link>
        </div>
        <div className="button" onClick={navigateToSplitter}>
          <Link to="/splitter">
            {/* Bill Icon - https://www.freepik.com/icon/bill_1052897#position=5&page=1&term=bill&fromView=keyword */}
            <img src={billIcon} alt="Splitter" />
            <p>Work out who owes what on your bill</p>
          </Link>
        </div>
      </div>
      <div className="buttons">
        {/* Creature Icon - <a href="https://www.freepik.com/icon/dinosaur_2466788#position=8&page=1&term=creature+robot&fromView=search">Icon by pongsakornRed</a> */}
        <div className="button" onClick={navigateToCreatures}>
          <Link to="/robot">
            <img src={creaturesIcon} alt="Robots" />
            <p>Search the Robot database</p>
          </Link>
        </div>
        {/* Videos Icon - https://www.freepik.com/icon/video-player_4618696#position=31&page=1&term=video&fromView=search*/}
        <div className="button" onClick={navigateToVideos}>
          <Link to="/learning">
            <img src={videoIcon} alt="Videos" />
            <p>Learn about saving your money here!</p>
          </Link>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default Home;