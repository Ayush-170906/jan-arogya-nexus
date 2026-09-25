/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        /* Near-black clinical foundation */
        canvas: '#0B0C0D',
        surface: '#151617',
        raised: '#1D1E20',
        line: '#292A2C',
        'line-strong': '#3A3B3E',

        brand: {
          50: '#fffbea', 100: '#fff3c4', 200: '#fce588', 300: '#fad94f',
          400: '#f5d742', 500: '#e8c22a', 600: '#c9a31a', 700: '#a6820f',
          800: '#7a5f0a', 900: '#5c4708', 950: '#2e2303',
        },
        ink: {
          50: '#f8fafc', 100: '#f1f5f9', 200: '#e2e8f0', 300: '#cbd5e1',
          400: '#94a3b8', 500: '#64748b', 600: '#475569', 700: '#334155',
          800: '#1e293b', 900: '#0f172a', 950: '#020617',
        },
      },
      /* Flatter, more restrained corners than the Tailwind defaults */
      borderRadius: {
        DEFAULT: '0.25rem',
        md: '0.3125rem',
        lg: '0.375rem',
        xl: '0.5rem',
        '2xl': '0.625rem',
      },
      boxShadow: {
        card: 'none',
        pop: '0 16px 40px -12px rgb(0 0 0 / 0.6), 0 4px 10px -4px rgb(0 0 0 / 0.5)',
      },
    },
  },
  plugins: [],
};
