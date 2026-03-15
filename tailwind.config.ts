import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'terminal-bg': '#0d0d0d',
        'terminal-window': '#111111',
        'terminal-title': '#1a1a1a',
      },
      fontFamily: {
        'mono': ['var(--font-jetbrains)', 'JetBrains Mono', 'monospace'],
        'sans': ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'typewriter': 'typewriter 0.5s steps(40) 1s 1 normal both',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'slide-out-right': 'slideOutRight 0.3s ease-in',
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        typewriter: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        slideInRight: {
          'from': { transform: 'translateX(100%)', opacity: '0' },
          'to': { transform: 'translateX(0)', opacity: '1' },
        },
        slideOutRight: {
          'from': { transform: 'translateX(0)', opacity: '1' },
          'to': { transform: 'translateX(100%)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
