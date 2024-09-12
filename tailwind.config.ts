import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        josefin: ['var(--font-josefin-sans)'],
        jelani: ['var(--font-jelani)'],
      },
      colors: {
        base: '#000000',
        text: '#FFFFFF',
        primary: '#FFBB3C',
      },
      keyframes: {
        'jello-horizontal': {
          '0%': { transform: 'scale3d(1, 1, 1)' },
          '30%': { transform: 'scale3d(1.25, 0.75, 1)' },
          '40%': { transform: 'scale3d(0.75, 1.25, 1)' },
          '50%': { transform: 'scale3d(1.15, 0.85, 1)' },
          '60%': { transform: 'scale3d(0.95, 1.05, 1)' },
          '70%': { transform: 'scale3d(1.05, 0.95, 1)' },
          '100%': { transform: 'scale3d(1, 1, 1)' },
        },
      },
      animation: {
        'jello-horizontal': 'jello-horizontal 0.9s both',
      },
    },
  },
  plugins: [],
}
export default config
