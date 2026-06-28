import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TournamentsPage from './pages/TournamentsPage';
import AuthModal from './components/AuthModal';

export default function App() {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setIsAuth(true);
  };

  const handleLogout = () => {
    setUser(null);
    setIsAuth(false);
  };

  return (
    <Router>
      <Navbar 
        isAuth={isAuth} 
        user={user} 
        onOpenAuth={() => setIsAuthModalOpen(true)} 
        onLogout={handleLogout}
      />
      
      {/* МАРШРУТИЗАЦІЯ СТОРІНОК */}
      <Routes>
        <Route path="/" element={
          <Home onRequireAuth={() => {
            if (!isAuth) {
              setIsAuthModalOpen(true);
            } else {
              alert(`Успішно заброньовано на ім'я ${user.name}!`);
            }
          }} />
        } />
        <Route path="/tournaments" element={<TournamentsPage />} />
      </Routes>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        onLoginSuccess={handleLoginSuccess}
      />
    </Router>
  );
}