/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0D1B2A',
          mid: '#152436',
          brand: '#274475',
          deep: '#071218',
        },
        sky: {
          DEFAULT: '#1E88E5',
          light: '#42A5F5',
          bright: '#29B6F6',
        },
        alert: '#E63946',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
};
