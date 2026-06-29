import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AuthModal from './AuthModal'; // 1. Імпортуємо твою модалку авторизації

const C = { yellow: '#facc15', muted: '#a1a1aa', border: '#3f3f46', bg: '#09090b', surface: '#121214' };

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = ({ id, path }) => {
    if (location.pathname !== path) {
      navigate(path);
      setTimeout(() => {
        if (id) {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo(0, 0);
        }
      }, 100);
    } else {
      if (id) {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(9, 9, 11, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? `1px solid ${C.border}` : '1px solid transparent',
        transition: 'all 0.3s ease',
        padding: '16px 24px'
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          <div 
            onClick={() => handleNavigation({ path: '/' })} 
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', zIndex: 55 }}
          >
            <img 
              src="/logo.png" 
              alt="Hexagon Logo" 
              style={{ 
                height: '48px', 
                objectFit: 'contain', 
                filter: 'drop-shadow(0px 0px 8px rgba(250, 204, 21, 0.6))' 
              }} 
            />
            <div style={{ display: 'flex', alignItems: 'center', gap: '2px', marginLeft: '12px' }}>
              <span style={{ fontSize: '28px', fontWeight: 900, color: '#fff', letterSpacing: '1px' }}>
                Hexa
              </span>
              <span style={{ fontSize: '28px', fontWeight: 900, color: '#000', background: C.yellow, padding: '0px 6px', borderRadius: '6px', letterSpacing: '0.5px' }}>
                Gon
              </span>
            </div>
          </div>

          {/* Навігація */}
          <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
            {[
              { name: 'ГОЛОВНА', id: null, path: '/' },
              { name: 'ПРО НАС', id: 'features', path: '/' },
              { name: 'ТАРИФИ ТА ЗОНИ', id: 'zones', path: '/' },
              { name: 'БРОНЮВАННЯ', id: 'booking', path: '/' },
              { name: 'ТУРНІРИ', id: null, path: '/tournaments' },
              { name: 'ЗВ\'ЯЗОК', id: 'footer', path: '/' }
            ].map(item => (
              <button 
                key={item.name}
                onClick={() => handleNavigation({ id: item.id, path: item.path })} 
                style={{ 
                  background: 'none', border: 'none', color: '#fff', 
                  fontWeight: 800, fontSize: 14, cursor: 'pointer', transition: 'color 0.2s', 
                  letterSpacing: '0.5px' 
                }}
                onMouseEnter={e => e.target.style.color = C.yellow}
                onMouseLeave={e => e.target.style.color = '#fff'}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div>
            <button 
              onClick={() => setIsAuthOpen(true)} 
              style={{ 
                background: C.yellow, color: '#000', border: 'none', padding: '12px 36px', 
                borderRadius: 999, fontWeight: 900, fontSize: 15, letterSpacing: 1, cursor: 'pointer',
                transition: 'transform 0.2s', textTransform: 'uppercase'
              }}
              onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.target.style.transform = 'scale(1)'}
            >
              Увійти
            </button>
          </div>

        </div>
      </nav>
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
}