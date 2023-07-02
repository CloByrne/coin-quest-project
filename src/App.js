// Import the necessary components and views
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Savings from './views/Savings';
import Shopping from './views/Shopping';
import VideoPage from './views/VideoPage';
import VideoList from './components/VideoList'; // Update import statement
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
    case "/Shopping":
      component = <Shopping />;
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
        <Route path="/Shopping" element={<Shopping />} />
        <Route path="/VideoPage" element={<VideoPage videos={VideoList} />} /> {/* Pass VideoList as prop */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
