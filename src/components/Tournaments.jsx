import React from 'react';

const C = { 
  yellow: '#facc15', 
  muted: '#71717a', 
  surface: '#141417', 
  bg: '#09090b', 
  border: '#27272a',
  red: '#ef4444', 
  blue: '#3b82f6',
  text: '#f4f4f5',
  // Нові фірмові кольори для ігор
  valorant: '#ff4655',
  tanks: '#10b981',
  warthunder: '#f97316',
  lol: '#06b6d4'
};

const TOURNAMENTS_DATA = [
  {
    id: 1,
    game: 'COUNTER-STRIKE 2',
    title: 'TERNOPIL MASTERS CUP 2026',
    status: 'REGISTRATION', 
    prize: '25,000 ₴',
    date: '15 Липня, 12:00',
    format: '5 vs 5 (LAN)',
    currentSlots: 12,
    maxSlots: 16,
    color: C.yellow
  },
  {
    id: 2,
    game: 'DOTA 2',
    title: 'THE BATTLE OF RIFT',
    status: 'LIVE',
    prize: '15,000 ₴',
    date: 'Гранд-Фінал наживо',
    format: '5 vs 5 (LAN)',
    currentSlots: 16,
    maxSlots: 16,
    color: C.red
  },
  {
    id: 3,
    game: 'VALORANT',
    title: 'RADIANT STRIKE TERNOPIL',
    status: 'REGISTRATION',
    prize: '12,000 ₴',
    date: '22 Липня, 11:00',
    format: '5 vs 5 (LAN)',
    currentSlots: 5,
    maxSlots: 8,
    color: C.valorant
  },
  {
    id: 4,
    game: 'WORLD OF TANKS',
    title: 'STEEL FIST TOURNAMENT',
    status: 'UPCOMING',
    prize: '10,000 ₴',
    date: '05 Серпня, 15:00',
    format: '3 vs 3 (LAN)',
    currentSlots: 4,
    maxSlots: 24,
    color: C.tanks
  },
  {
    id: 5,
    game: 'WAR THUNDER',
    title: 'ACES OF THE SKY & STEEL',
    status: 'UPCOMING',
    prize: '8,000 ₴',
    date: '12 Серпня, 14:00',
    format: 'Сетапи (LAN)',
    currentSlots: 2,
    maxSlots: 16,
    color: C.warthunder
  },
  {
    id: 6,
    game: 'LEAGUE OF LEGENDS',
    title: 'SUMMONERS RIFT SHOWDOWN',
    status: 'REGISTRATION',
    prize: '14,000 ₴',
    date: '19 Серпня, 10:00',
    format: '5 vs 5 (LAN)',
    currentSlots: 6,
    maxSlots: 8,
    color: C.lol
  }
];

export default function Tournaments() {
  const handleRegister = (title) => {
    alert(`Реєстрація на "${title}" відкрита! Дані підготовлені для інтеграції з API.`);
  };

  return (
    <>
      <style>{`
        @keyframes pulseLive {
          0% { opacity: 0.5; }
          50% { opacity: 1; }
          100% { opacity: 0.5; }
        }
        .live-pulse {
          animation: pulseLive 1.2s infinite ease-in-out;
        }
        .tournament-card:hover .action-btn {
          background: #fff !important;
          color: #000 !important;
          box-shadow: 0 0 20px rgba(255,255,255,0.4);
        }
      `}</style>

      <section style={{ padding: '60px 24px 120px', background: C.bg, position: 'relative' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          
          {/* Хедер сторінки */}
          <div style={{ textAlign: 'center', marginBottom: 80, marginTop: 40 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <span style={{ width: 12, height: 2, background: C.yellow }} />
              <span style={{ color: C.yellow, fontSize: 12, fontWeight: 800, letterSpacing: 4, textTransform: 'uppercase' }}>TOURNAMENTS HUB</span>
              <span style={{ width: 12, height: 2, background: C.yellow }} />
            </div>
            <h1 style={{ fontSize: 'clamp(36px, 6vw, 56px)', fontWeight: 900, color: '#fff', letterSpacing: 1, textTransform: 'uppercase', margin: 0 }}>
              КІБЕРСПОРТИВНА <span style={{ color: C.yellow, textShadow: '0 0 30px rgba(250,204,21,0.2)' }}>АРЕНА</span>
            </h1>
            <p style={{ color: C.muted, fontSize: 16, marginTop: 14, maxWidth: 600, margin: '14px auto 0', lineHeight: 1.6 }}>
              Обирай свою дисципліну, збирай команду та подавай заявку. Всі матчі проходять на базі нашого клубу.
            </p>
          </div>

          {/* Сітка турнірів */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32 }}>
            {TOURNAMENTS_DATA.map((t) => {
              const progressPercentage = (t.currentSlots / t.maxSlots) * 100;
              
              return (
                <div key={t.id} className="tournament-card" style={{
                  background: `linear-gradient(180deg, #161619 0%, #0c0c0e 100%)`,
                  borderRadius: 16, padding: '36px 32px', border: `1px solid ${C.border}`,
                  display: 'flex', flexDirection: 'column', position: 'relative', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = t.color; e.currentTarget.style.transform = 'translateY(-6px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  
                  {/* Контурна лінія зверху */}
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: t.color }} />

                  {/* Хедер: Гра та Статус */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                    <span style={{ fontSize: 12, fontWeight: 900, color: t.color, letterSpacing: 2 }}>{t.game}</span>
                    
                    {t.status === 'LIVE' ? (
                      <div className="live-pulse" style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(239, 68, 68, 0.1)', border: `1px solid ${C.red}`, padding: '4px 12px', borderRadius: 6 }}>
                        <div style={{ width: 6, height: 6, background: C.red, borderRadius: '50%', boxShadow: `0 0 8px ${C.red}` }} />
                        <span style={{ color: C.red, fontSize: 11, fontWeight: 900, letterSpacing: 1 }}>НАЖИВО</span>
                      </div>
                    ) : t.status === 'REGISTRATION' ? (
                      <div style={{ background: `${t.color}15`, border: `1px solid ${t.color}`, padding: '4px 12px', borderRadius: 6 }}>
                        <span style={{ color: t.color, fontSize: 11, fontWeight: 900, letterSpacing: 1 }}>ВІДКРИТА</span>
                      </div>
                    ) : (
                      <div style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${C.border}`, padding: '4px 12px', borderRadius: 6 }}>
                        <span style={{ color: C.muted, fontSize: 11, fontWeight: 800, letterSpacing: 1 }}>АНОНС</span>
                      </div>
                    )}
                  </div>

                  {/* Назва турніру */}
                  <h3 style={{ fontSize: 22, fontWeight: 800, color: '#fff', letterSpacing: 0.5, marginBottom: 20, lineHeight: 1.3, minHeight: 58 }}>
                    {t.title}
                  </h3>

                  {/* Блок призового фонду */}
                  <div style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.03)', borderRadius: 10, padding: '16px 20px', marginBottom: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 13, color: C.muted, fontWeight: 600, letterSpacing: 1 }}>ПРИЗОВИЙ ФОНД</span>
                    <span style={{ fontSize: 24, fontWeight: 900, color: t.color, textShadow: `0 0 20px ${t.color}30` }}>{t.prize}</span>
                  </div>

                  {/* Таймінг та формат */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 32, flexGrow: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14 }}>
                      <span style={{ fontSize: 16, opacity: 0.7 }}>📅</span>
                      <span style={{ color: C.muted }}>Старт матчів:</span>
                      <span style={{ color: '#fff', fontWeight: 600, marginLeft: 'auto' }}>{t.date}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14 }}>
                      <span style={{ fontSize: 16, opacity: 0.7 }}>⚔️</span>
                      <span style={{ color: C.muted }}>Формат:</span>
                      <span style={{ color: '#fff', fontWeight: 600, marginLeft: 'auto' }}>{t.format}</span>
                    </div>
                  </div>

                  {/* Прогрес заповнення слотів */}
                  <div style={{ marginBottom: 36 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 8 }}>
                      <span style={{ color: C.muted, fontWeight: 500 }}>Зареєстровано:</span>
                      <span style={{ color: '#fff', fontWeight: 700 }}>{t.currentSlots} / {t.maxSlots} команд</span>
                    </div>
                    <div style={{ width: '100%', height: 6, background: '#1f1f23', borderRadius: 3, overflow: 'hidden' }}>
                      <div style={{ 
                        width: `${progressPercentage}%`, height: '100%', 
                        background: t.color, borderRadius: 3,
                        boxShadow: `0 0 10px ${t.color}50`, transition: 'width 0.5s ease'
                      }} />
                    </div>
                  </div>

                  {/* Кнопка дії */}
                  <button 
                    onClick={() => handleRegister(t.title)}
                    disabled={t.status === 'LIVE'}
                    className="action-btn"
                    style={{
                      width: '100%', padding: '16px', borderRadius: 8, fontSize: 13, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase',
                      cursor: t.status === 'LIVE' ? 'not-allowed' : 'pointer', transition: 'all 0.2s ease',
                      background: t.status === 'REGISTRATION' ? t.color : 'transparent',
                      color: t.status === 'REGISTRATION' ? '#000' : C.text,
                      border: t.status === 'REGISTRATION' ? 'none' : `1px solid ${C.border}`
                    }}
                  >
                    {t.status === 'LIVE' ? 'ДИВИТИСЬ ТРАНСЛЯЦІЮ' : t.status === 'REGISTRATION' ? 'РЕЄСТРАЦІЯ' : 'ДЕТАЛЬНІШЕ'}
                  </button>

                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}