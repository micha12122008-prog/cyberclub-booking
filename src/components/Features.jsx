import React from 'react';

const C = { yellow: '#eab308', muted: '#a1a1aa', surface: '#18181b', border: '#3f3f46', bg: '#09090b' };

const FEATURES = [
  {
    id: 1,
    title: 'БЕЗКОМПРОМІСНЕ ЗАЛІЗО',
    desc: 'Граємо на максималках. ПК на базі RTX 5070/5080 та процесорів Intel Core i7/i9. Монітори Zowie 360Hz для абсолютної переваги в кіберспорті.',
    Icon: () => (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={C.yellow} strokeWidth="1.5">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'LOUNGE & PS5',
    desc: 'Окрема чил-зона з величезними 4K телевізорами, останніми ексклюзивами на PlayStation 5 та зручними диванами для відпочинку з друзями.',
    Icon: () => (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={C.yellow} strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <circle cx="9" cy="10" r="1" fill={C.yellow} />
        <circle cx="15" cy="10" r="1" fill={C.yellow} />
      </svg>
    )
  },
  {
    id: 3,
    title: 'ENERGY BAR',
    desc: 'Заряджайся не відходячи від каси. У нас є все: від енергетиків та крафтових лимонадів до смачних сендвічів та снеків для нічних каток.',
    Icon: () => (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={C.yellow} strokeWidth="1.5">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'КІБЕРТУРНІРИ',
    desc: 'Ми регулярно проводимо турніри з CS2, Dota 2 та Valorant з реальними призовими фондами. Збери команду та доведи, що ви найкращі.',
    Icon: () => (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={C.yellow} strokeWidth="1.5">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
      </svg>
    )
  }
];

export default function Features() {
  return (
    <section id="features" style={{ padding: '100px 24px', background: C.bg, position: 'relative' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        
        {/* Заголовок секції */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <span style={{ width: 40, height: 1, background: C.border }} />
            <span style={{ color: C.yellow, fontSize: 14, fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase' }}>
              Більше ніж просто ПК
            </span>
            <span style={{ width: 40, height: 1, background: C.border }} />
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, color: '#fff', letterSpacing: 2, textTransform: 'uppercase' }}>
            ПРОСТІР <span style={{ color: C.yellow }}>КІБЕРСПОРТУ</span>
          </h2>
        </div>

        {/* Сітка карток */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 24 }}>
          {FEATURES.map((feat) => (
            <div 
              key={feat.id} 
              style={{
                background: C.surface,
                padding: '40px 32px',
                borderRadius: 8,
                border: `1px solid ${C.border}`,
                transition: 'all 0.3s ease',
                cursor: 'default',
                display: 'flex',
                flexDirection: 'column',
                gap: 20
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = C.yellow;
                e.currentTarget.style.boxShadow = `0 10px 30px -10px rgba(234,179,8,0.3)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = C.border;
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ 
                width: 64, height: 64, borderRadius: 8, background: 'rgba(234,179,8,0.1)', 
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: `1px solid rgba(234,179,8,0.2)`
              }}>
                <feat.Icon />
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: '#fff', letterSpacing: 1 }}>{feat.title}</h3>
              <p style={{ color: C.muted, fontSize: 15, lineHeight: 1.6 }}>{feat.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}