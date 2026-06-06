import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/components/**/*.{js,vue,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/plugins/**/*.{js,ts}',
    './app/app.vue',
    './app/error.vue',
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgba(var(--background), <alpha-value>)',
        surface: 'rgba(var(--surface), <alpha-value>)',
        accent: 'rgba(var(--accent), <alpha-value>)',
        textColor: 'rgba(var(--text-color), <alpha-value>)',
        borderColor: 'rgba(var(--border-color), <alpha-value>)',
      },
      fontFamily: {
        display: ['Bodoni Moda', 'serif'],
        mono: ['IBM Plex Mono', 'monospace'],
        sans: ['Manrope', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'none',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
