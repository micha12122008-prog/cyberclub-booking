import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Контекст авторизації
import { AuthProvider } from './context/AuthContext';

// Компоненти
import Navbar from './components/Navbar';

// Сторінки
import Home from './pages/Home';
import Profile from './pages/Profile';
import TournamentsPage from './pages/TournamentsPage';
import AdminDashboard from './pages/AdminDashboard';

// ГОЛОВНИЙ ЕКСПОРТ (саме через його відсутність падав Vite)
export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        
        {/* Контейнер для всіх сторінок */}
        <div className="main-content">
          <Routes>
            {/* Головна сторінка. Передаємо просту функцію для вимоги логіну */}
            <Route 
              path="/" 
              element={
                <Home onRequireAuth={() => alert('Будь ласка, увійдіть в акаунт (кнопка в правому верхньому куті)!')} />
              } 
            />
            
            <Route path="/profile" element={<Profile />} />
            <Route path="/tournaments" element={<TournamentsPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            
            {/* Якщо користувач введе неіснуючий шлях, повертаємо його на головну */}
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}