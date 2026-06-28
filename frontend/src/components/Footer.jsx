import React from 'react';

const C = { yellow: '#facc15', muted: '#a1a1aa', border: '#3f3f46', bg: '#09090b' };

export default function Footer() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer" style={{ background: C.bg, paddingTop: '80px', borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'space-between', marginBottom: '48px' }}>
          
          <div style={{ flex: '1 1 300px' }}>
            <div onClick={() => window.scrollTo(0, 0)} style={{ 
              fontSize: 26, fontWeight: 800, letterSpacing: 2, color: '#fff', cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', marginBottom: 16
            }}>
              CYBER<span style={{ color: '#09090b', background: C.yellow, padding: '2px 8px', borderRadius: 4, marginLeft: 4 }}>CLUB</span>
            </div>
            <p style={{ color: C.muted, fontSize: 14, lineHeight: 1.6, maxWidth: '320px' }}>
              Преміальний кіберспортивний простір в Тернополі. Топове залізо, атмосфера для перемог та цілодобовий доступ до улюблених ігор.
            </p>
          </div>

          <div style={{ flex: '1 1 150px' }}>
            <h4 style={{ color: '#fff', fontSize: 16, fontWeight: 700, marginBottom: 20, letterSpacing: 1 }}>НАВІГАЦІЯ</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { name: 'Головна', id: 'hero' },
                { name: 'Про нас', id: 'features' },
                { name: 'Тарифи та Зони', id: 'zones' },
                { name: 'Бронювання', id: 'booking' },
                { name: 'Турніри', id: 'tournaments' }
              ].map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => scrollTo(link.id)}
                    style={{ background: 'none', border: 'none', color: C.muted, fontSize: 14, cursor: 'pointer', padding: 0, textAlign: 'left', transition: 'color 0.2s', fontWeight: 500 }}
                    onMouseEnter={(e) => e.target.style.color = C.yellow}
                    onMouseLeave={(e) => e.target.style.color = C.muted}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ flex: '1 1 250px' }}>
            <h4 style={{ color: '#fff', fontSize: 16, fontWeight: 700, marginBottom: 20, letterSpacing: 1 }}>КОНТАКТИ</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: 12, color: C.muted, fontSize: 14 }}>
                <span style={{ fontSize: 18 }}>📍</span>
                <span style={{ lineHeight: 1.5 }}>вул. Валова, 1<br/>Тернопіль, Україна</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 12, color: C.muted, fontSize: 14 }}>
                <span style={{ fontSize: 18 }}>📞</span>
                <a href="tel:+38070111999" style={{ color: C.muted, textDecoration: 'none', transition: 'color 0.2s', fontWeight: 600 }} 
                   onMouseEnter={(e) => e.target.style.color = C.yellow} onMouseLeave={(e) => e.target.style.color = C.muted}>
                  +38 (070) 111-999
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 12, color: C.muted, fontSize: 14 }}>
                <span style={{ fontSize: 18 }}>✉️</span>
                <a href="mailto:info@cyberclub.ua" style={{ color: C.muted, textDecoration: 'none', transition: 'color 0.2s' }}
                   onMouseEnter={(e) => e.target.style.color = C.yellow} onMouseLeave={(e) => e.target.style.color = C.muted}>
                  info@cyberclub.ua
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 12, color: C.muted, fontSize: 14 }}>
                <span style={{ fontSize: 18 }}>🕒</span>
                <span style={{ fontWeight: 600 }}>Працюємо 24/7 (без вихідних)</span>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ 
          borderTop: `1px solid ${C.border}`, padding: '24px 0', 
          display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px'
        }}>
          <p style={{ color: C.muted, fontSize: 13, margin: 0 }}>
            © {new Date().getFullYear()} CYBERCLUB. Всі права захищені.
          </p>
          
          <div style={{ display: 'flex', gap: 24 }}>
            {['Instagram', 'Telegram', 'TikTok'].map((social) => (
              <a key={social} href="#" style={{ 
                color: C.muted, textDecoration: 'none', fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.color = C.yellow}
              onMouseLeave={(e) => e.target.style.color = C.muted}>
                {social}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}