// Import the necessary components and views
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Savings from './views/Savings';
import Store from './views/Store';
import VideoPage from './views/VideoPage';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  // Define a variable to hold the component to render based on the current URL
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/Savings":
      component = <Savings />;
      break;
    case "/Store":
      component = <Store />;
      break;
    case "/VideoPage":
      component = <VideoPage />;
      break;
    default:
      component = null;
  }

  return (
    // Render the Navbar component and the appropriate view component based on the URL
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Savings" element={<Savings />} />
        <Route path="/Store" element={<Store />} />
        <Route path="/VideoPage" element={<VideoPage />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
