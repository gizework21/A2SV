import type { Config } from 'tailwindcss';
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const {
   default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

const config = {
   darkMode: ['class'],
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
            fadeIn: {
               '0%': { opacity: '0', transform: 'translateY(10px)' },
               '100%': { opacity: '1', transform: 'translateY(0)' },
             },
            'accordion-down': {
               from: { height: '0' },
               to: { height: 'var(--radix-accordion-content-height)' },
            },
            'accordion-up': {
               from: { height: 'var(--radix-accordion-content-height)' },
               to: { height: '0' },
            },
            gradient: {
               to: {
                  backgroundPosition: 'var(--bg-size) 0',
               },
            },

            'logo-cloud': {
               from: { transform: 'translateX(0)' },
               to: { transform: 'translateX(calc(-100% - 4rem))' },
            },
            marquee: {
               from: { transform: 'translateX(0)' },
               to: { transform: 'translateX(calc(-100% - var(--gap)))' },
            },
            'marquee-vertical': {
               from: { transform: 'translateY(0)' },
               to: { transform: 'translateY(calc(-100% - var(--gap)))' },
            },
            move: {
               '0%': { transform: 'translateX(-200px)' },
               '100%': { transform: 'translateX(200px)' },
            },
            borderAnimation: {
               '0%': { 'clip-path': 'inset(0 100% 100% 0)' },
               '25%': { 'clip-path': 'inset(0 0 100% 0)' },
               '50%': { 'clip-path': 'inset(0 0 0 0)' },
               '75%': { 'clip-path': 'inset(0 0 0 100%)' },
               '100%': { 'clip-path': 'inset(0 100% 0 0)' },
             },
         },
         animation: {
            'accordion-down': 'accordion-down 0.2s ease-out',
            'accordion-up': 'accordion-up 0.2s ease-out',
            gradient: 'gradient 8s linear infinite',
            'logo-cloud': 'logo-cloud 30s linear infinite',
            marquee: 'marquee var(--duration) linear infinite',
            'marquee-vertical':
               'marquee-vertical var(--duration) linear infinite',
            move: 'move 5s linear infinite',
            fadeIn: 'fadeIn 1s ease-out',
            border: 'borderAnimation 2s linear infinite',
         },
         borderAnimation: {
            '0%': { 'clip-path': 'inset(0 100% 100% 0)' },
            '25%': { 'clip-path': 'inset(0 0 100% 0)' },
            '50%': { 'clip-path': 'inset(0 0 0 0)' },
            '75%': { 'clip-path': 'inset(0 0 0 100%)' },
            '100%': { 'clip-path': 'inset(0 100% 0 0)' },
          },
        
      },
   },
   plugins: [require('tailwindcss-animate'), addVariablesForColors],
} satisfies Config;

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
   let allColors = flattenColorPalette(theme('colors'));
   let newVars = Object.fromEntries(
      Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
   );

   addBase({
      ':root': newVars,
   });
}

export default config;
