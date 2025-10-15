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
        'poppins': ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        'montserrat': ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
        'primary': ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        'secondary': ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      colors: {
        'gofluent': {
          'primary': '#6366f1',
          'secondary': '#8b5cf6',
          'accent': '#06b6d4',
          'dark': '#1e293b',
          'light': '#f8fafc',
        }
      },
    },
  },
  plugins: [],
}

export default config
