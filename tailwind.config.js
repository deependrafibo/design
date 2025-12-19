/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'emptyState': 'var(--shadow-emptyState)',
      },
    },
  },
  plugins: [],
  // Use a more comprehensive approach to safelisting classes
};
