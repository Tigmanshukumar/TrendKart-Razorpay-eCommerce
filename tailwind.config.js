/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3b82f6',
          dark: '#60a5fa',
        },
        secondary: {
          DEFAULT: '#10b981',
          dark: '#34d399',
        },
        dark: {
          DEFAULT: '#1f2937',
          bg: '#0f172a',
          card: '#1e293b',
          input: '#334155',
        },
        light: '#f9fafb',
      },
    },
  },
  plugins: [],
}