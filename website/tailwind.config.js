/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': 'var(--morphic-primary)',
        'primary-dark': 'var(--morphic-primary-dark)',
        'primary-light': 'var(--morphic-primary-light)',
        'secondary': 'var(--morphic-secondary)',
        'accent': 'var(--morphic-accent)',
        'success': 'var(--morphic-success)',
        'warning': 'var(--morphic-warning)',
        'error': 'var(--morphic-error)',
        'bg-primary': 'var(--morphic-bg-primary)',
        'bg-secondary': 'var(--morphic-bg-secondary)',
        'bg-tertiary': 'var(--morphic-bg-tertiary)',
        'text-primary': 'var(--morphic-text-primary)',
        'text-secondary': 'var(--morphic-text-secondary)',
        'text-tertiary': 'var(--morphic-text-tertiary)',
        'border-light': 'var(--morphic-border-light)',
        'border-medium': 'var(--morphic-border-medium)',
      },
      boxShadow: {
        'sm': 'var(--morphic-shadow-sm)',
        'md': 'var(--morphic-shadow-md)',
        'lg': 'var(--morphic-shadow-lg)',
        'inner': 'var(--morphic-shadow-inner)',
      },
      borderRadius: {
        'sm': 'var(--morphic-radius-sm)',
        'md': 'var(--morphic-radius-md)',
        'lg': 'var(--morphic-radius-lg)',
        'xl': 'var(--morphic-radius-xl)',
        'full': 'var(--morphic-radius-full)',
      },
      spacing: {
        '1': 'var(--morphic-space-1)',
        '2': 'var(--morphic-space-2)',
        '3': 'var(--morphic-space-3)',
        '4': 'var(--morphic-space-4)',
        '5': 'var(--morphic-space-5)',
        '6': 'var(--morphic-space-6)',
        '8': 'var(--morphic-space-8)',
        '10': 'var(--morphic-space-10)',
        '12': 'var(--morphic-space-12)',
        '16': 'var(--morphic-space-16)',
        '20': 'var(--morphic-space-20)',
      },
      zIndex: {
        '0': 'var(--morphic-z-0)',
        '10': 'var(--morphic-z-10)',
        '20': 'var(--morphic-z-20)',
        '30': 'var(--morphic-z-30)',
        '40': 'var(--morphic-z-40)',
        '50': 'var(--morphic-z-50)',
      },
      transitionProperty: {
        'base': 'var(--morphic-transition-base)',
        'smooth': 'var(--morphic-transition-smooth)',
        'bounce': 'var(--morphic-transition-bounce)',
      },
      backdropBlur: {
        'sm': 'var(--morphic-blur-sm)',
        'md': 'var(--morphic-blur-md)',
        'lg': 'var(--morphic-blur-lg)',
      }
    }
  },
  plugins: [],
} 