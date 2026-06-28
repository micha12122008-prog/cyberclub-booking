import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';

const C = { yellow: '#facc15', muted: '#a1a1aa', border: '#3f3f46', bg: '#09090b', surface: '#121214' };

const TOURNAMENTS = [
  {
    id: 1, game: 'DOTA 2', name: 'DOTA 2 5x5 MIX (07.06)', date: '07.06', time: '18:00', prize: '40 000 ₴', format: '5x5 MIX', teamSize: '5x5', fee: 'Пакет Ніч / День', bracket: 'Single Elimination', bgGradient: 'linear-gradient(90deg, #0e1726 0%, #09090b 100%)', first: '20 000 ₴', second: '12 000 ₴', third: '8 000 ₴'
  },
  {
    id: 2, game: 'CS 2', name: 'CS 2 2x2 AIM NIGHT (12.06)', date: '12.06', time: '23:00', prize: '10 000 ₴', format: 'CS 2 2x2 AIM NIGHT', teamSize: '2x2', fee: 'Пакет Ніч', bracket: 'Double Elimination (BO1)', bgGradient: 'linear-gradient(90deg, #261c0e 0%, #09090b 100%)', first: '5 000 ₴', second: '3 000 ₴', third: '2 000 ₴'
  },
  {
    id: 3, game: 'CS 2', name: 'CS 2 2x2 WINGMAN NIGHT (18.06)', date: '18.06', time: '22:00', prize: '10 000 ₴', format: 'Wingman 2x2', teamSize: '2x2', fee: 'Пакет Ніч', bracket: 'Swiss System', bgGradient: 'linear-gradient(90deg, #0e2618 0%, #09090b 100%)', first: '5 000 ₴', second: '3 000 ₴', third: '2 000 ₴'
  }
];

const TournamentsList = ({ onSelect }) => (
  <div style={{ maxWidth: 1000, margin: '0 auto', padding: '40px 20px' }}>
    
    <Reveal direction="down">
      <div style={{ textAlign: 'center', marginBottom: 80 }}>
        <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 900, color: C.yellow, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 40 }}>
          СПИСОК ДИСЦИПЛІН
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px 40px', textAlign: 'left', maxWidth: 800, margin: '0 auto', marginBottom: 40 }}>
          {['DOTA 2 5X5 MIX', 'CS 2 2X2 AIM NIGHT', 'CS 2 2X2 WINGMAN NIGHT', 'CS 2 5X5 CLASSIC DIVISION', 'CS 2 5X5 MIX', 'VALORANT 5X5 MIX', 'CS 2 WINNER GRAND FINAL'].map(item => (
            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 18, fontWeight: 800, color: '#fff', letterSpacing: 1 }}>
              <div style={{ width: 32, height: 24, background: C.surface, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, color: C.muted, border: `1px solid ${C.border}` }}>GAME</div>
              {item}
            </div>
          ))}
        </div>
        <button style={{ background: C.yellow, color: '#000', border: 'none', padding: '16px 48px', fontSize: 16, fontWeight: 800, borderRadius: 999, cursor: 'pointer', transition: 'transform 0.2s' }} onMouseEnter={e => e.target.style.transform = 'scale(1.05)'} onMouseLeave={e => e.target.style.transform = 'scale(1)'}>
          ОБРАТИ ТУРНІР
        </button>
      </div>
    </Reveal>

    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {TOURNAMENTS.map((t, index) => (
        <Reveal key={t.id} direction="up" delay={index * 150}>
          <div style={{ display: 'flex', flexWrap: 'wrap', background: C.surface, borderRadius: 12, overflow: 'hidden', border: `1px solid ${C.border}`, alignItems: 'center' }}>
            <div style={{ width: '300px', height: '140px', background: t.bgGradient, position: 'relative', padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'center', flexShrink: 0 }}>
              <div style={{ fontSize: 24, fontWeight: 900, color: '#fff', letterSpacing: 2 }}>{t.game}</div>
              <div style={{ fontSize: 32, fontWeight: 900, color: '#fff' }}>{t.prize}</div>
              <div style={{ position: 'absolute', bottom: 12, left: 24, background: C.yellow, color: '#000', fontSize: 10, fontWeight: 800, padding: '2px 8px', borderRadius: 4, textTransform: 'uppercase' }}>
                Призовий фонд
              </div>
            </div>
            <div style={{ padding: '24px 32px', flexGrow: 1 }}>
              <div style={{ color: C.muted, fontSize: 13, marginBottom: 8 }}>{t.date}</div>
              <div style={{ color: '#fff', fontSize: 20, fontWeight: 800, textTransform: 'uppercase', marginBottom: 12 }}>{t.name}</div>
              <div style={{ color: C.yellow, fontSize: 13, fontWeight: 600 }}>Призовий фонд</div>
              <div style={{ color: '#fff', fontSize: 18, fontWeight: 800 }}>{t.prize}</div>
            </div>
            <div style={{ padding: 32 }}>
              <button onClick={() => onSelect(t)} style={{ background: C.yellow, color: '#000', border: 'none', padding: '14px 32px', fontSize: 14, fontWeight: 800, borderRadius: 999, cursor: 'pointer', transition: 'all 0.2s' }} onMouseEnter={e => e.target.style.transform = 'scale(1.05)'} onMouseLeave={e => e.target.style.transform = 'scale(1)'}>
                ПЕРЕГЛЯНУТИ
              </button>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </div>
);

const TournamentDetail = ({ tournament, onBack }) => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="page-animate" style={{ paddingBottom: 100 }}>
      
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '20px 24px' }}>
        <button onClick={onBack} style={{ background: 'transparent', color: C.muted, border: 'none', cursor: 'pointer', fontSize: 14, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 8 }}>
          ← Назад до списку
        </button>
      </div>

      <Reveal direction="down">
        <div style={{ background: tournament.bgGradient, padding: '80px 24px', borderBottom: `1px solid ${C.border}` }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <h1 style={{ fontSize: 'clamp(60px, 10vw, 120px)', fontWeight: 900, color: '#fff', margin: 0, lineHeight: 1 }}>{tournament.game}</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginTop: 24 }}>
              <span style={{ fontSize: 32, color: '#fff', fontWeight: 500 }}>{tournament.date}</span>
              <span style={{ fontSize: 32, color: '#fff', fontWeight: 800 }}>{tournament.teamSize}</span>
              <span style={{ fontSize: 40, color: C.yellow, fontWeight: 900 }}>{tournament.prize}</span>
            </div>
          </div>
        </div>
      </Reveal>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 24px' }}>
        
        <Reveal delay={100}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 40 }}>
            <button onClick={() => setActiveTab('overview')} style={{ background: activeTab === 'overview' ? C.yellow : C.surface, color: activeTab === 'overview' ? '#000' : '#fff', padding: '12px 32px', borderRadius: 999, border: 'none', fontWeight: 800, cursor: 'pointer', transition: 'all 0.2s' }}>Огляд</button>
            <button onClick={() => setActiveTab('rules')} style={{ background: activeTab === 'rules' ? C.yellow : C.surface, color: activeTab === 'rules' ? '#000' : '#fff', padding: '12px 32px', borderRadius: 999, border: 'none', fontWeight: 800, cursor: 'pointer', transition: 'all 0.2s' }}>Регламент</button>
          </div>
        </Reveal>

        {activeTab === 'overview' && (
          <>
            {/* ПЛАШКИ: Тепер Reveal всередині обгортки! */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', marginBottom: 60 }}>
              {[
                { title: 'Дисципліна та формат', val: tournament.format, icon: '🎮' },
                { title: 'Дата та час', val: `${tournament.date}.2026, ${tournament.time}`, icon: '🕒' },
                { title: 'Розмір команди', val: tournament.teamSize, icon: '👥' },
                { title: 'Вступний внесок', val: tournament.fee, icon: '🎟' },
                { title: 'Формат сітки', val: tournament.bracket, icon: '🏆' }
              ].map((pill, i) => (
                <div key={i}>
                  <Reveal direction="up" delay={200 + (i * 100)}>
                    <div style={{ border: `1px solid ${C.yellow}`, borderRadius: 999, padding: '12px 24px', display: 'flex', alignItems: 'center', gap: 16, background: 'rgba(250, 204, 21, 0.03)' }}>
                      <div style={{ fontSize: 24 }}>{pill.icon}</div>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ color: '#fff', fontSize: 12, fontWeight: 800 }}>{pill.title}</span>
                        <span style={{ color: C.muted, fontSize: 11 }}>{pill.val}</span>
                      </div>
                    </div>
                  </Reveal>
                </div>
              ))}
            </div>

            <Reveal delay={600}>
              <div style={{ textAlign: 'center', marginBottom: 100 }}>
                <button style={{ background: C.yellow, color: '#000', border: 'none', padding: '20px 48px', fontSize: 16, fontWeight: 900, borderRadius: 999, cursor: 'pointer', textTransform: 'uppercase', boxShadow: '0 0 20px rgba(250,204,21,0.2)' }}>
                  ПОСИЛАННЯ НА ТУРНІР {tournament.name}
                </button>
              </div>
            </Reveal>

            {/* ПЕРЕМОЖЦІ: Order стоїть на зовнішніх div-ах! */}
            <div style={{ textAlign: 'center' }}>
              <Reveal direction="up" delay={100}>
                <h3 style={{ color: '#fff', fontSize: 32, fontWeight: 900, textTransform: 'uppercase', marginBottom: 40 }}>ПЕРЕМОЖЦІ</h3>
              </Reveal>
              
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap' }}>
                
                {/* 2 Місце (Order: 1) */}
                <div style={{ order: 1 }}>
                  <Reveal direction="up" delay={400}>
                    <div style={{ border: `3px solid ${C.yellow}`, padding: 24, width: 220, height: 280, position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: C.surface }}>
                       <div style={{ fontSize: 64, fontWeight: 900, color: '#fff', lineHeight: 1 }}>2</div>
                       <div style={{ fontSize: 24, fontWeight: 800, color: '#fff', marginBottom: 30 }}>місце</div>
                       <div style={{ color: C.yellow, fontSize: 12, fontWeight: 800 }}>призовий</div>
                       <div style={{ color: '#fff', fontSize: 20, fontWeight: 900 }}>{tournament.second}</div>
                    </div>
                  </Reveal>
                </div>

                {/* 1 Місце (Order: 2) */}
                <div style={{ order: 2 }}>
                  <Reveal direction="up" delay={200}>
                    <div style={{ border: `3px solid ${C.yellow}`, padding: 24, width: 260, height: 340, position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: C.surface, boxShadow: '0 0 30px rgba(250,204,21,0.1)' }}>
                       <div style={{ fontSize: 80, fontWeight: 900, color: '#fff', lineHeight: 1 }}>1</div>
                       <div style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 40 }}>місце</div>
                       <div style={{ color: C.yellow, fontSize: 14, fontWeight: 800 }}>призовий</div>
                       <div style={{ color: '#fff', fontSize: 24, fontWeight: 900 }}>{tournament.first}</div>
                    </div>
                  </Reveal>
                </div>

                {/* 3 Місце (Order: 3) */}
                <div style={{ order: 3 }}>
                  <Reveal direction="up" delay={600}>
                    <div style={{ border: `3px solid ${C.yellow}`, padding: 24, width: 200, height: 260, position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: C.surface }}>
                       <div style={{ fontSize: 56, fontWeight: 900, color: '#fff', lineHeight: 1 }}>3</div>
                       <div style={{ fontSize: 20, fontWeight: 800, color: '#fff', marginBottom: 20 }}>місце</div>
                       <div style={{ color: C.yellow, fontSize: 12, fontWeight: 800 }}>призовий</div>
                       <div style={{ color: '#fff', fontSize: 18, fontWeight: 900 }}>{tournament.third}</div>
                    </div>
                  </Reveal>
                </div>

              </div>
            </div>
          </>
        )}

        {activeTab === 'rules' && (
          <Reveal direction="up">
            <div style={{ color: C.muted, lineHeight: 1.8, fontSize: 16, background: C.surface, padding: 40, borderRadius: 12, border: `1px solid ${C.border}` }}>
              <h3 style={{ color: '#fff', marginBottom: 20, fontSize: 24 }}>Регламент турніру</h3>
              <p>1. Усі матчі проходять на базі кіберклубу на акаунтах FACEIT гравців.</p>
              <p>2. Використання будь-якого стороннього ПЗ, скриптів або макросів карається моментальною дискваліфікацією команди.</p>
              <p>3. Запізнення команди більше ніж на 15 хвилин від старту сітки призводить до технічної поразки.</p>
            </div>
          </Reveal>
        )}
      </div>
    </div>
  );
};

export default function TournamentsPage() {
  const [selectedTournament, setSelectedTournament] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedTournament]);

  return (
    <main className="page-animate" style={{ paddingTop: '80px', background: C.bg, minHeight: '100vh', fontFamily: 'sans-serif' }}>
      {!selectedTournament ? (
        <TournamentsList onSelect={setSelectedTournament} />
      ) : (
        <TournamentDetail tournament={selectedTournament} onBack={() => setSelectedTournament(null)} />
      )}
      <Footer />
    </main>
  );
}