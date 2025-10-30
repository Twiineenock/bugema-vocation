import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef6ff',
          100: '#e7f0ff',
          200: '#d2e3ff',
          300: '#b5d2ff',
          400: '#4a90e2',
          500: '#2071d6',
          600: '#1b61b3',
          700: '#154a8a',
          800: '#0b2a55',
          900: '#071a36'
        }
      },
      borderRadius: {
        xl2: '1rem',
        xl3: '1.25rem'
      },
      boxShadow: {
        glass: '0 10px 30px rgba(32,113,214,.18)',
        deep: '0 30px 80px rgba(0,0,0,.35)'
      },
      keyframes: {
        reveal: { '0%': { opacity: '0', transform: 'translateY(16px) scale(.98)' }, '100%': { opacity: '1', transform: 'translateY(0) scale(1)' } },
        floaty: { '0%,100%': { transform: 'translateY(0) translateX(0)' }, '50%': { transform: 'translateY(-14px) translateX(6px)' } },
        kenburns: { '0%': { transform: 'scale(1)' }, '50%': { transform: 'scale(1.06)' }, '100%': { transform: 'scale(1)' } }
      },
      animation: {
        reveal: 'reveal .7s ease forwards',
        floaty: 'floaty 10s ease-in-out infinite',
        kenburns: 'kenburns 18s ease-in-out infinite'
      }
    }
  },
  plugins: []
} satisfies Config


