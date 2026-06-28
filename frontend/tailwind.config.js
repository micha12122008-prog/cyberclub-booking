/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg:      '#0a0a0f',
          surface: '#111118',
          deep:    '#0d0d16',
          purple:  '#7c3aed',
          cyan:    '#06b6d4',
          violet:  '#a78bfa',
          muted:   '#94a3b8',
          border:  'rgba(124,58,237,0.2)',
        },
      },
      fontFamily: {
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
      boxShadow: {
        'neon-purple': '0 0 15px rgba(124,58,237,0.5), 0 0 30px rgba(124,58,237,0.25)',
        'neon-cyan':   '0 0 15px rgba(6,182,212,0.5),  0 0 30px rgba(6,182,212,0.25)',
        'neon-sm-p':   '0 0 8px  rgba(124,58,237,0.4)',
        'neon-sm-c':   '0 0 8px  rgba(6,182,212,0.4)',
      },
      animation: {
        'pulse-purple': 'pulsePurple 2.5s ease-in-out infinite',
        'pulse-cyan':   'pulseCyan   2.5s ease-in-out infinite',
        'border-glow':  'borderGlow  2s   ease-in-out infinite',
        'float':        'float       4s   ease-in-out infinite',
      },
      keyframes: {
        pulsePurple: {
          '0%,100%': { boxShadow: '0 0 10px rgba(124,58,237,0.4)' },
          '50%':     { boxShadow: '0 0 25px rgba(124,58,237,0.9), 0 0 50px rgba(124,58,237,0.4)' },
        },
        pulseCyan: {
          '0%,100%': { boxShadow: '0 0 10px rgba(6,182,212,0.4)' },
          '50%':     { boxShadow: '0 0 25px rgba(6,182,212,0.9), 0 0 50px rgba(6,182,212,0.4)' },
        },
        borderGlow: {
          '0%,100%': { boxShadow: '0 0 12px rgba(124,58,237,0.4), inset 0 0 12px rgba(124,58,237,0.05)' },
          '50%':     { boxShadow: '0 0 24px rgba(124,58,237,0.8), inset 0 0 20px rgba(124,58,237,0.1)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
