const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './hooks/**/*.{js,jsx,ts,tsx}',
    './utils/**/*.{js,jsx,ts,tsx}'
  ],
  presets: [require('nativewind/preset')],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        fontFamily: {
          // Example custom font.  Requires custom font to be loaded via expo-font.  See useCachedResources.ts and README.md.
          racesport: ['racesport-regular'],
          'inter-regular': ['inter-regular'],
          'inter-bold': ['inter-bold'],
          'inter-semiBold': ['inter-semiBold'],
          'inter-medium': ['inter-medium'],
          'inter-light': ['inter-light'],
          'inter-thin': ['inter-thin'],
          'inter-extraLight': ['inter-extraLight'],
          'inter-extraBold': ['inter-extraBold'],
          'inter-black': ['inter-black'],
          'miller-regular': ['miller-regular'],
          'miller-bold': ['miller-bold'],
          'miller-light': ['miller-light'],
          'miller-italic': ['miller-italic'],
          'miller-lightItalic': ['miller-lightItalic'],
          'miller-semiBold': ['miller-semiBold'],
          'miller-semiBoldItalic': ['miller-semiBoldItalic']
        }
      },
      colors: {
        // Neutral
        'Neutral-White': '#ffffff',
        'Neutral-Grey-0': '#ffffff',
        'Neutral-Grey-10': '#f9f9f9',
        'Neutral-Grey-20': '#f1f1f1',
        'Neutral-Grey-30': '#e9e9e9',
        'Neutral-Grey-40': '#e1e1e1',
        'Neutral-Grey-50': '#d1d1d1',
        'Neutral-Grey-60': '#c9c9c9',
        'Neutral-Grey-70': '#a1a1a1',
        'Neutral-Grey-80': '#5F5F5F',
        'Neutral-Grey-90': '#3a3a3a',
        'Neutral-Grey-100': '#222222',
        'Neutral-Black': '#000000'
      },
      padding: {
        'Page-Horizontal': '24px'
      },
      margin: {
        'Page-Margin': '16px'
      },
      gap: {
        // Add as necessary
      },
      boxShadow: {
        sm: '0 1px 3px rgba(0, 0, 0, 0.11)'
      },
      fontSize: {
        example: [
          '64px',
          {
            lineHeight: '64px',
            letterSpacing: '-0.01'
          }
        ]
      }
    }
  },
  plugins: []
};
