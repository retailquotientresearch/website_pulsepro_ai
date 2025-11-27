import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sand: '#FAFAF9',
        lavender: '#F3F0FF',
        mint: '#ECFDF5',
        iceBlue: '#EFF6FF',
        butterYellow: '#FFFBEB',
        softPurple: '#FAF5FF',
        softPink: '#FDF2F8',
      },
      keyframes: {
        'subtle-glow': {
          '0%,100%': { boxShadow: '0 8px 32px rgba(139, 92, 246, 0.15), 0 0 0 1px rgba(139, 92, 246, 0.1)' },
          '50%': { boxShadow: '0 12px 48px rgba(139, 92, 246, 0.25), 0 0 0 1px rgba(139, 92, 246, 0.15)' },
        },
      },
      animation: {
        'subtle-glow': 'subtle-glow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config