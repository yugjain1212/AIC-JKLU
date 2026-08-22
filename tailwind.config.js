/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#FBF7F0',
        surface: '#FFFFFF',
        obsidian: '#121212',
        slateMuted: '#52525B',
        hairline: '#E4E4E0',
        brand: '#EB5725',
        brandHover: '#C84214',
        brandTint: '#FFF2ED',
      },
      fontFamily: {
        marcellus: ['var(--font-marcellus)', 'serif'],
        serif: ['var(--font-marcellus)', 'serif'],
        robotoMono: ['var(--font-roboto-mono)', 'monospace'],
        'roboto-mono': ['var(--font-roboto-mono)', 'monospace'],
        mono: ['var(--font-roboto-mono)', 'monospace'],
      },
      keyframes: {
        // Preloader box pulse (filled boxes breathe slightly)
        boxPulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        // Page section reveal on scroll
        fadeSlideUp: {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'box-pulse': 'boxPulse 1.4s ease-in-out infinite',
        'fade-slide-up': 'fadeSlideUp 0.7s ease-out forwards',
      },
    },
  },
  plugins: [],
};
