import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      textColor: {
        primary: '#1B264A',
      },
      backgroundColor: {
        primary: '#1B264A',
      },
      textStrokeWidth: {
        '1': '1px',
      },
      textStrokeColor: {
        primary: '#F5F5F5',
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      ringColor: {
        primary: '#1B264A',
      },
     
    },
    container: {
      padding: '1rem',
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke': {
          '-webkit-text-stroke-width': '1px',
          '-webkit-text-stroke-color': '#F5F5F5',
          color: 'transparent',
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
export default config;
