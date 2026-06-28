import React, { useState } from 'react';

const C = { yellow: '#facc15', muted: '#a1a1aa', surface: '#18181b', bg: '#09090b', border: '#3f3f46' };

export default function AuthModal({ isOpen, onClose, onLoginSuccess }) {
  const [isLoginTab, setIsLoginTab] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !password || (!isLoginTab && !username)) {
      alert("Будь ласка, заповніть всі поля!");
      return;
    }

    const fakeUser = {
      name: isLoginTab ? email.split('@')[0] : username,
      email: email,
      balance: isLoginTab ? 150 : 0
    };

    onLoginSuccess(fakeUser);
    onClose();
  };

  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 100,
      background: 'rgba(9, 9, 11, 0.8)', backdropFilter: 'blur(12px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20
    }}>
      
      <div onClick={e => e.stopPropagation()} style={{
        background: C.surface, border: `1px solid ${C.yellow}`, borderRadius: 12,
        width: '100%', maxWidth: '420px', padding: '40px 32px', position: 'relative',
        boxShadow: '0 20px 50px rgba(0,0,0,0.5), 0 0 30px rgba(250,204,21,0.05)'
      }}>
        
        <button onClick={onClose} style={{
          position: 'absolute', top: 20, right: 20, background: 'none', border: 'none',
          color: C.muted, fontSize: 22, cursor: 'pointer', transition: 'color 0.2s'
        }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = C.muted}>
          ✕
        </button>

        <div style={{ display: 'flex', gap: 24, marginBottom: 32, borderBottom: `1px solid ${C.border}`, paddingBottom: 12 }}>
          <button onClick={() => setIsLoginTab(true)} style={{
            background: 'none', border: 'none', color: isLoginTab ? C.yellow : C.muted,
            fontSize: 20, fontWeight: 800, cursor: 'pointer', letterSpacing: 1, transition: 'all 0.2s',
            position: 'relative', padding: '0 4px'
          }}>
            ВХІД
            {isLoginTab && <span style={{ position: 'absolute', bottom: -14, left: 0, right: 0, height: 2, background: C.yellow }} />}
          </button>
          <button onClick={() => setIsLoginTab(false)} style={{
            background: 'none', border: 'none', color: !isLoginTab ? C.yellow : C.muted,
            fontSize: 20, fontWeight: 800, cursor: 'pointer', letterSpacing: 1, transition: 'all 0.2s',
            position: 'relative', padding: '0 4px'
          }}>
            РЕЄСТРАЦІЯ
            {!isLoginTab && <span style={{ position: 'absolute', bottom: -14, left: 0, right: 0, height: 2, background: C.yellow }} />}
          </button>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          
          {!isLoginTab && (
            <div>
              <label style={{ color: '#fff', fontSize: 12, fontWeight: 700, letterSpacing: 1, display: 'block', marginBottom: 8 }}>НІКНЕЙМ</label>
              <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Введіть ваш нікнейм" style={{
                width: '100%', padding: '14px 16px', background: C.bg, border: `1px solid ${C.border}`, borderRadius: 6, color: '#fff', fontSize: 14, outline: 'none', transition: 'border-color 0.2s'
              }} onFocus={e => e.target.style.borderColor = C.yellow} onBlur={e => e.target.style.borderColor = C.border} />
            </div>
          )}

          <div>
            <label style={{ color: '#fff', fontSize: 12, fontWeight: 700, letterSpacing: 1, display: 'block', marginBottom: 8 }}>EMAIL</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="example@club.com" style={{
              width: '100%', padding: '14px 16px', background: C.bg, border: `1px solid ${C.border}`, borderRadius: 6, color: '#fff', fontSize: 14, outline: 'none', transition: 'border-color 0.2s'
            }} onFocus={e => e.target.style.borderColor = C.yellow} onBlur={e => e.target.style.borderColor = C.border} />
          </div>

          <div>
            <label style={{ color: '#fff', fontSize: 12, fontWeight: 700, letterSpacing: 1, display: 'block', marginBottom: 8 }}>ПАРОЛЬ</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" style={{
              width: '100%', padding: '14px 16px', background: C.bg, border: `1px solid ${C.border}`, borderRadius: 6, color: '#fff', fontSize: 14, outline: 'none', transition: 'border-color 0.2s'
            }} onFocus={e => e.target.style.borderColor = C.yellow} onBlur={e => e.target.style.borderColor = C.border} />
          </div>

          <button type="submit" style={{
            width: '100%', padding: '16px', background: C.yellow, color: '#000', border: 'none', borderRadius: 6,
            fontSize: 15, fontWeight: 800, cursor: 'pointer', letterSpacing: 2, marginTop: 12, transition: 'all 0.2s'
          }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
            {isLoginTab ? 'УВІЙТИ В АКАУНТ' : 'СТВОРИТИ ПРОФІЛЬ'}
          </button>

        </form>
      </div>
    </div>
  );
}