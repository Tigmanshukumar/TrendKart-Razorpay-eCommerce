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
        primary: '#3b82f6',
        secondary: '#10b981',
        dark: '#1f2937',
        light: '#f9fafb',
      },
      backgroundColor: {
        'dark-primary': '#121212',
        'dark-secondary': '#1e1e1e',
      },
      textColor: {
        'dark-primary': '#f3f4f6',
      },
    },
  },
  plugins: [],
}