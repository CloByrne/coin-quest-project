import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Savings from './views/Savings';
import Store from './views/Store';
import VideoPage from './views/VideoPage';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import ProtectedRoute from './components/ProtectedRoute';
import ProtectedPage from './views/ProtectedPage';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    // Perform login logic
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    // Perform logout logic
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/savings" element={<Savings />} />
        <Route path="/store" element={<Store />} />
        <Route path="/videoPage" element={<VideoPage />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout handleLogout={handleLogout} />} />
        <Route
          path="/protected"
          element={<ProtectedRoute isAuthenticated={isAuthenticated} component={ProtectedPage} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
