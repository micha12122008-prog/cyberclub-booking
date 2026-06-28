import React from 'react';

const C = { yellow: '#facc15', gold: '#eab308', muted: '#a1a1aa', border: '#3f3f46' };

const INFO_TICKER = [
  "🔥 ЗНИЖКА 30% НА РАНКОВІ ПАКЕТИ (08:00 - 14:00)",
  "🏆 РЕЄСТРАЦІЯ НА ЛІТНІЙ ТУРНІР З CS2 ВЖЕ ВІДКРИТА",
  "🎮 ТОПОВІ ЗБІРКИ НА БАЗІ RTX 5080 TI SUPER ТА 360HZ МОНІТОРІВ",
  "⚡️ ПРАЦЮЄМО 24/7 БЕЗ ВИХІДНИХ ТА ПЕРЕРВ",
  "🍔 ENERGY BAR: НОВІ КРАФТОВІ ЛИМОНАДИ ТА СНЕКИ"
];

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <style>{`
        /* Спеціальні стилі для адаптації Hero секції */
        @media (max-width: 900px) {
          .hero-floating-widget { display: none !important; } /* Приховуємо бічні віджети на телефоні */
          .hero-main-title { font-size: 11vw !important; line-height: 1.1 !important; }
          .ticker-container { top: 62px !important; } /* Підлаштовуємо під мобільну шапку */
        }
      `}</style>

      <section id="hero" style={{ 
        position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', 
        alignItems: 'center', justifyContent: 'center', overflow: 'hidden', 
        paddingTop: 100, paddingBottom: 120
      }}>
        
        {/* ІНФОРМАЦІЙНА БІГУЧА СТРІЧКА */}
        <div className="ticker-container" style={{ top: '65px' }}>
          <div className="ticker-wrapper">
            {[...INFO_TICKER, ...INFO_TICKER].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', padding: '0 40px', whiteSpace: 'nowrap' }}>
                <span style={{ color: '#fff', fontSize: '14px', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase' }}>
                  {item}
                </span>
                <span style={{ color: C.yellow, margin: '0 60px', fontSize: '18px' }}>✦</span>
              </div>
            ))}
          </div>
        </div>

        {/* ФОН ТА СІТКА */}
        <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.6 }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(250,204,21,0.08) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

        {/* ЛЕТЮЧІ ВІДЖЕТИ (Додано клас hero-floating-widget для приховання на мобільних) */}
        <div className="hero-floating-widget animate-float" style={{
          position: 'absolute', left: '8%', top: '30%', background: 'rgba(24, 24, 27, 0.6)', backdropFilter: 'blur(12px)', border: `1px solid ${C.border}`, padding: '16px 24px', borderRadius: 12, display: 'flex', alignItems: 'center', gap: 16, zIndex: 2, boxShadow: '0 8px 32px rgba(0,0,0,0.4)'
        }}>
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: C.yellow, boxShadow: `0 0 10px ${C.yellow}` }} />
          <div>
            <div style={{ color: '#fff', fontWeight: 800, fontSize: 16, letterSpacing: 1 }}>CS2 & DOTA 2</div>
            <div style={{ color: C.muted, fontSize: 12, marginTop: 4, letterSpacing: 1 }}>Турнірний FPS / 0 Ping</div>
          </div>
        </div>

        <div className="hero-floating-widget animate-float" style={{
          position: 'absolute', right: '8%', bottom: '35%', background: 'rgba(24, 24, 27, 0.6)', backdropFilter: 'blur(12px)', border: `1px solid ${C.border}`, padding: '16px 24px', borderRadius: 12, display: 'flex', alignItems: 'center', gap: 16, zIndex: 2, animationDelay: '1.5s', boxShadow: '0 8px 32px rgba(0,0,0,0.4)'
        }}>
          <div>
            <div style={{ color: '#fff', fontWeight: 800, fontSize: 16, letterSpacing: 1, textAlign: 'right' }}>PIXART 3950</div>
            <div style={{ color: C.muted, fontSize: 12, marginTop: 4, letterSpacing: 1, textAlign: 'right' }}>Абсолютна точність аіму</div>
          </div>
          <div style={{ color: C.yellow, opacity: 0.8 }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a7 7 0 0 0-7 7v6a7 7 0 0 0 14 0V9a7 7 0 0 0-7-7z"/><path d="M12 2v10"/></svg>
          </div>
        </div>

        {/* ГОЛОВНИЙ КОНТЕНТ */}
        <div style={{ position: 'relative', zIndex: 3, textAlign: 'center', padding: '0 20px', width: '100%', maxWidth: 1000, marginTop: '80px' }}>
          
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
            <span style={{ width: 48, height: 1, background: C.yellow }} />
            <span style={{ color: C.yellow, fontSize: 12, fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase' }}>
              Тернопіль · Найкращий кіберклуб
            </span>
            <span style={{ width: 48, height: 1, background: C.yellow }} />
          </div>

          <h1 className="hero-main-title" style={{ fontSize: 'clamp(44px, 8vw, 96px)', fontWeight: 800, letterSpacing: 3, textTransform: 'uppercase', lineHeight: 1.05, marginBottom: 40, color: '#fff' }}>
            ТВІЙ СТАРТ<br />
            <span style={{ color: C.yellow, textShadow: '0 0 40px rgba(250,204,21,0.4)' }}>ДО ПЕРЕМОГИ</span>
          </h1>

          <button onClick={() => scrollTo('booking')} style={{
            background: C.yellow, color: '#09090b', border: 'none', padding: '18px 48px', fontSize: 16, fontWeight: 800, letterSpacing: 3, textTransform: 'uppercase', cursor: 'pointer', borderRadius: 4, transition: 'all 0.2s', boxShadow: '0 0 20px rgba(250,204,21,0.3)'
          }} onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(250,204,21,0.5)' }} onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(250,204,21,0.3)' }}>
            ЗАБРОНЮВАТИ ПК
          </button>

          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '32px', borderTop: `1px solid ${C.border}`, paddingTop: 32, width: '100%', maxWidth: 800, margin: '56px auto 0' }}>
            {[
              ['RTX 5080 TI SUPER', 'Топові відеокарти'],
              ['360Hz', 'Частота оновлення'],
              ['24/7', 'Працюємо без вихідних']
            ].map(([val, lbl]) => (
              <div key={val} style={{ textAlign: 'center', flex: '1 1 140px' }}>
                <div style={{ fontSize: 20, fontWeight: 800, color: '#fff', letterSpacing: 1 }}>{val}</div>
                <div style={{ fontSize: 11, color: C.muted, letterSpacing: 2, textTransform: 'uppercase', marginTop: 6 }}>{lbl}</div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </>
  );
}