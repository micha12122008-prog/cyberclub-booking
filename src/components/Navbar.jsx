import React, { useState, useEffect } from 'react';

const C = { yellow: '#facc15', border: '#3f3f46', bg: '#09090b', surface: '#18181b' };

export default function Navbar({ onOpenAuth }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const NAV_LINKS = [
    { name: 'ГОЛОВНА', id: 'hero' },
    { name: 'ПРО НАС', id: 'features' },
    { name: 'ТАРИФИ ТА ЗОНИ', id: 'zones' },
    { name: 'БРОНЮВАННЯ', id: 'booking' },
    { name: 'ТУРНІРИ', id: 'tournaments' },
    { name: 'ЗВ\'ЯЗОК', id: 'footer' }
  ];

  const scrollTo = (id) => {
    setMenuOpen(false); // Закриваємо меню при кліку (для мобільних)
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <style>{`
        /* Адаптивні стилі для навігації */
        .desktop-nav { display: flex; gap: 32px; align-items: center; }
        .desktop-auth { display: block; }
        .mobile-burger { display: none; background: none; border: none; cursor: pointer; flex-direction: column; gap: 6px; z-index: 55; }
        .mobile-burger span { display: block; width: 28px; height: 2px; background: #fff; transition: all 0.3s ease; borderRadius: 2px; }
        
        /* Випадаюче мобільне меню */
        .mobile-menu {
          position: fixed; top: 0; left: 0; right: 0; background: rgba(9, 9, 11, 0.98);
          backdrop-filter: blur(16px); padding: 80px 24px 32px; display: flex; flex-direction: column; gap: 24px;
          transform: translateY(-100%); opacity: 0; pointer-events: none; transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); z-index: 45;
          border-bottom: 1px solid ${C.border};
        }
        .mobile-menu.open { transform: translateY(0); opacity: 1; pointer-events: all; }

        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .desktop-auth { display: none !important; }
          .mobile-burger { display: flex !important; }
          .navbar-container { padding: 16px 20px !important; }
        }
      `}</style>

      <nav className="navbar-container" style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 40px',
        background: scrolled ? 'rgba(9, 9, 11, 0.85)' : 'transparent', 
        borderBottom: scrolled ? `1px solid rgba(63, 63, 70, 0.4)` : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        transition: 'all 0.3s ease-in-out'
      }}>
        
        {/* Логотип */}
        <div onClick={() => { scrollTo('hero'); setMenuOpen(false); }} style={{ 
          fontSize: 26, fontWeight: 900, letterSpacing: 2, color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', zIndex: 55
        }}>
          CYBER<span style={{ color: '#09090b', background: C.yellow, padding: '2px 8px', borderRadius: 4, marginLeft: 4 }}>CLUB</span>
        </div>

        {/* --- DESKTOP МЕНЮ --- */}
        <div className="desktop-nav">
          {NAV_LINKS.map((link) => (
            <button key={link.name} onClick={() => scrollTo(link.id)} style={{
              background: 'none', border: 'none', color: '#fff', fontWeight: 700, fontSize: 14, letterSpacing: 1, cursor: 'pointer', transition: 'color 0.2s'
            }} onMouseEnter={(e) => e.currentTarget.style.color = C.yellow} onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}>
              {link.name}
            </button>
          ))}
        </div>

        <button className="desktop-auth" onClick={onOpenAuth} style={{
          background: C.yellow, color: '#000', border: 'none', padding: '12px 32px', fontSize: 15, fontWeight: 800, cursor: 'pointer', borderRadius: 999, letterSpacing: 1, transition: 'all 0.2s', boxShadow: '0 4px 14px rgba(250, 204, 21, 0.2)'
        }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(250, 204, 21, 0.4)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 14px rgba(250, 204, 21, 0.2)'; }}>
          УВІЙТИ
        </button>

        {/* --- МОБІЛЬНИЙ БУРГЕР --- */}
        <button className="mobile-burger" onClick={() => setMenuOpen(!menuOpen)}>
          <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none' }} />
          <span style={{ opacity: menuOpen ? 0 : 1 }} />
          <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none' }} />
        </button>
      </nav>

      {/* --- МОБІЛЬНЕ ВИПАДАЮЧЕ МЕНЮ --- */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <button key={link.name} onClick={() => scrollTo(link.id)} style={{
            background: 'none', border: 'none', color: '#fff', fontWeight: 800, fontSize: 18, letterSpacing: 2, textAlign: 'left', cursor: 'pointer'
          }}>
            {link.name}
          </button>
        ))}
        <button onClick={() => { setMenuOpen(false); onOpenAuth(); }} style={{
          background: C.yellow, color: '#000', border: 'none', padding: '16px', fontSize: 16, fontWeight: 800, cursor: 'pointer', borderRadius: 8, letterSpacing: 2, marginTop: 16
        }}>
          АВТОРИЗАЦІЯ
        </button>
      </div>
    </>
  );
}