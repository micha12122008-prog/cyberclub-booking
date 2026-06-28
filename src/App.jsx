import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const C = { yellow: '#eab308', muted: '#a1a1aa', surface: '#18181b', border: '#3f3f46' };

const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div onClick={e => e.stopPropagation()} style={{ background: C.surface, padding: 40, borderRadius: 8, width: '100%', maxWidth: 400, border: `1px solid ${C.border}` }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 24, color: '#fff', textAlign: 'center', letterSpacing: 2 }}>
          {isLogin ? 'АВТОРИЗАЦІЯ' : 'РЕЄСТРАЦІЯ'}
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 24 }}>
          {!isLogin && <input type="text" placeholder="Ім'я" className="input-cyber" />}
          <input type="email" placeholder="Email" className="input-cyber" />
          <input type="password" placeholder="Пароль" className="input-cyber" />
        </div>
        <button style={{ width: '100%', padding: '14px', background: C.yellow, color: '#000', border: 'none', borderRadius: 4, fontSize: 16, fontWeight: 700, cursor: 'pointer', letterSpacing: 2, marginBottom: 16 }}>
          {isLogin ? 'УВІЙТИ' : 'СТВОРИТИ АКАУНТ'}
        </button>
        <p style={{ textAlign: 'center', color: C.muted, fontSize: 14 }}>
          {isLogin ? 'Ще немає акаунта? ' : 'Вже є акаунт? '}
          <span onClick={() => setIsLogin(!isLogin)} style={{ color: C.yellow, cursor: 'pointer', fontWeight: 600 }}>
            {isLogin ? 'Зареєструватись' : 'Увійти'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default function App() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <>
      <Navbar onOpenAuth={() => setIsAuthOpen(true)} />
      <Home onRequireAuth={() => setIsAuthOpen(true)} />
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
}