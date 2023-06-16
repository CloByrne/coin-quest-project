// Import the necessary components and views
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Savings from './views/Savings';
import Shopping from './views/Shopping';
import Learning from './views/Learning';
import Footer from './components/Footer';

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
    case "/Learning":
      component = <Learning />;
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
        <Route path="/Learning" element={<Learning />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;