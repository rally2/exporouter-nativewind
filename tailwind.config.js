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
  theme: {
    extend: {
      fontFamily: {
        // Example custom font.  Requires custom font to be loaded via expo-font.  See useCachedResources.ts and README.md.
        racesport: ['racesport-regular']
      },
      colors: {
        // Works as expected
        // e.g. bg-brandPrimary vs. dark:bg-brandPrimaryDark
        brandPrimary: '#1DE083',

        background: colors.gray[100],
        backgroundDark: colors.slate[900],

        lightTextTheme: '#000000',
        darkTextTheme: '#FFFFFF'
      }
    }
  },
  plugins: []
};
