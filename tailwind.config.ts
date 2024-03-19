import type { Config } from 'tailwindcss';

const config = {
  // darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
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
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
