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
      }
    },
  },
  plugins: [],
}
export default config
