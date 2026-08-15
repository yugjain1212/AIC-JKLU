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
        canvas: '#FBFBFA',
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
        robotoMono: ['var(--font-roboto-mono)', 'monospace'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};