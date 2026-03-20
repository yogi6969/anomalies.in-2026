/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#FFFFFF',
          800: '#F8F8FA',
          700: '#F0F0F4',
          600: '#E8E8EE',
        },
        electric: {
          400: '#C47E1A',
          500: '#E8A030',
          600: '#C47E1A',
        },
        accent: {
          cyan: '#0F766E',
          emerald: '#16A34A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
