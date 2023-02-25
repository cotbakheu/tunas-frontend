/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      whiteBg:'#f8fafc',
      white: {
        DEFAULT: '#FFFFFF',
      },
      black: {
        DEFAULT: '#000000'
      },
      textColor: {
        primary:{
          dark: '#1e293b',
          light: '#f8fafc',
        },
        secondary: '#64748b',
        tertiary: '#e2e8f0'
      },
      grey: {
        DEFAULT: '#334155',
        '50': '#f8fafc',
        '100': '#f1f5f9',
        '200': '#e2e8f0',
        '300': '#cbd5e1',
        '400': '#94a3b8',
        '500': '#64748b',
        '600': '#475569',
        '700': '#334155',
        '800': '#1e293b',
        '900': '#0f172a',
      },
      primary: {
        DEFAULT: '#0b7d57',
        '50': '#f6fffb',
        '100': '#e3f4ec',
        '200': '#a7f3d0',
        '300': '#6ee7b7',
        '400': '#34d399',
        '500': '#10b981',
        '600': '#059669',
        '700': '#0b7d57',
        '800': '#085e42',
        '900': '#06402c',
      },
      error: {
        DEFAULT: '#FDA29B',
        '50': '#FFFBFA',
        '100': '#FEF3F2',
        '200': '#FEE4E2',
        '300': '#FDA29B',
        '400': '#F97066',
        '500': '#F04438',
        '600': '#D92D20',
        '700': '#B42318',
        '800': '#912018',
        '900': '#7A271A',
      },
      success: {
        DEFAULT: '#219653',
      },
      alert: {
        DEFAULT: '#EB5757'
      },
      warning: {
        DEFAULT: '#F2994A'
      },
      info: {
        DEFAULT: '#2D9CDB'
      }
    }
  },
  plugins: [require("flowbite/plugin")],
}