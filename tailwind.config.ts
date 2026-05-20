import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0F1115',
        surface: '#171A21',
        text: '#F5F7FA',
        accentBlue: '#6EA8FE',
        accentPurple: '#A78BFA',
        accentGreen: '#7EE787',
        softWarning: '#FFB86C',
        muted: '#8B949E'
      },
      boxShadow: {
        glass: '0 8px 30px rgba(0,0,0,.3)'
      }
    }
  },
  plugins: []
};

export default config;
