/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        calch: 'calc(100vh - 90px)',
      },
      boxShadow: {
        in: '0px -2px 2px 0px rgba(0, 0, 0, 0.2) inset',
      },
    },
  },
  plugins: [],
};
