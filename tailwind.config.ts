import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        vermilion: {
          50: 'hsl(var(--vermilion-50) / <alpha-value>)',
          100: 'hsl(var(--vermilion-100) / <alpha-value>)',
          200: 'hsl(var(--vermilion-200) / <alpha-value>)',
          300: 'hsl(var(--vermilion-300) / <alpha-value>)',
          400: 'hsl(var(--vermilion-400) / <alpha-value>)',
          500: 'hsl(var(--vermilion-500) / <alpha-value>)',
          600: 'hsl(var(--vermilion-600) / <alpha-value>)',
          700: 'hsl(var(--vermilion-700) / <alpha-value>)',
          800: 'hsl(var(--vermilion-800) / <alpha-value>)',
          900: 'hsl(var(--vermilion-900) / <alpha-value>)',
          950: 'hsl(var(--vermilion-950) / <alpha-value>)',
        },
        'mountain-mist': {
          50: 'hsl(var(--mountain-mist-50) / <alpha-value>)',
          100: 'hsl(var(--mountain-mist-100) / <alpha-value>)',
          200: 'hsl(var(--mountain-mist-200) / <alpha-value>)',
          300: 'hsl(var(--mountain-mist-300) / <alpha-value>)',
          400: 'hsl(var(--mountain-mist-400) / <alpha-value>)',
          500: 'hsl(var(--mountain-mist-500) / <alpha-value>)',
          600: 'hsl(var(--mountain-mist-600) / <alpha-value>)',
          700: 'hsl(var(--mountain-mist-700) / <alpha-value>)',
          800: 'hsl(var(--mountain-mist-800) / <alpha-value>)',
          900: 'hsl(var(--mountain-mist-900) / <alpha-value>)',
          950: 'hsl(var(--mountain-mist-950) / <alpha-value>)',
        },
      },
    },
  },
  plugins: [],
};
export default config;
