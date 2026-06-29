import React, { useState } from 'react';
import Reveal from './Reveal'; 

const C = { yellow: '#facc15', muted: '#a1a1aa', border: '#3f3f46', bg: '#09090b', surface: '#121214' };

const FEATURES = [
  {
    title: 'БЕЗКОМПРОМІСНЕ ЗАЛІЗО',
    desc: 'Граємо на максималках. ПК на базі RTX 5070/5080 та процесорів Intel Core i7/i9. Монітори Zowie 360Hz для абсолютної переваги в кіберспорті.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
        <rect x="9" y="9" width="6" height="6"></rect>
        <line x1="9" y1="1" x2="9" y2="4"></line>
        <line x1="15" y1="1" x2="15" y2="4"></line>
        <line x1="9" y1="20" x2="9" y2="23"></line>
        <line x1="15" y1="20" x2="15" y2="23"></line>
        <line x1="20" y1="9" x2="23" y2="9"></line>
        <line x1="20" y1="14" x2="23" y2="14"></line>
        <line x1="1" y1="9" x2="4" y2="9"></line>
        <line x1="1" y1="14" x2="4" y2="14"></line>
      </svg>
    )
  },
  {
    title: 'LOUNGE & PS5',
    desc: 'Окрема чил-зона з величезними 4K телевізорами, останніми ексклюзивами на PlayStation 5 та зручними диванами для відпочинку з друзями.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        <line x1="9" y1="10" x2="15" y2="10"></line>
        <line x1="12" y1="7" x2="12" y2="13"></line>
      </svg>
    )
  },
  {
    title: 'ENERGY BAR',
    desc: 'Заряджайся не відходячи від каси. У нас є все: від енергетиків та крафтових лимонадів до смачних сендвічів та снеків для нічних каток.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
        <line x1="6" y1="1" x2="6" y2="4"></line>
        <line x1="10" y1="1" x2="10" y2="4"></line>
        <line x1="14" y1="1" x2="14" y2="4"></line>
      </svg>
    )
  },
  {
    title: 'КІБЕРТУРНІРИ',
    desc: 'Ми регулярно проводимо турніри з CS2, Dota 2 та Valorant з реальними призовими фондами. Збери команду та доведи, що ви найкращі.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"></circle>
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
      </svg>
    )
  }
];

const FeatureCard = ({ feature, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Reveal delay={index * 150} direction="up">
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          background: C.surface,
          borderRadius: '16px',
          padding: '40px 32px',
          border: `1px solid ${isHovered ? C.yellow : C.border}`, // Зміна бордера при наведенні
          transition: 'all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1)',
          transform: isHovered ? 'translateY(-10px)' : 'translateY(0)', // Картка піднімається
          boxShadow: isHovered ? '0 15px 40px rgba(250, 204, 21, 0.12)' : '0 0 0 rgba(0,0,0,0)', // Неонове світіння
          height: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '14px',
          background: isHovered ? C.yellow : 'rgba(250, 204, 21, 0.05)',
          border: `1px solid ${isHovered ? C.yellow : 'rgba(250, 204, 21, 0.2)'}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: isHovered ? '#000' : C.yellow,
          marginBottom: '32px',
          transition: 'all 0.3s ease'
        }}>
          {feature.icon}
        </div>

        <h3 style={{ 
          color: '#fff', 
          fontSize: '20px', 
          fontWeight: 900, 
          letterSpacing: '0.5px', 
          lineHeight: '1.3',
          marginBottom: '16px',
          textTransform: 'uppercase'
        }}>
          {feature.title}
        </h3>

        {/* Опис */}
        <p style={{ 
          color: C.muted, 
          fontSize: '15px', 
          lineHeight: '1.7', 
          fontWeight: 500,
          margin: 0
        }}>
          {feature.desc}
        </p>
      </div>
    </Reveal>
  );
};

export default function Features() {
  return (
    <section id="features" style={{ background: C.bg, padding: '120px 24px', position: 'relative', overflow: 'hidden' }}>
      
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '80%', height: '50%', background: 'radial-gradient(ellipse at center, rgba(250,204,21,0.03) 0%, rgba(9,9,11,0) 70%)',
        pointerEvents: 'none', zIndex: 0
      }}></div>

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
        <Reveal direction="down">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ height: '1px', width: '40px', background: C.border }}></div>
              <span style={{ color: C.yellow, fontWeight: 800, fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase' }}>
                Більше ніж просто ПК
              </span>
              <div style={{ height: '1px', width: '40px', background: C.border }}></div>
            </div>
            
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 900, color: '#fff', textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>
              Простір <span style={{ color: C.yellow }}>Кіберспорту</span>
            </h2>
          </div>
        </Reveal>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
          gap: '24px' 
        }}>
          {FEATURES.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}