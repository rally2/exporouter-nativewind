/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './hooks/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        // Example custom font.  Requires custom font to be loaded via expo-font.  See useCachedResources.ts and README.md.
        racesport: ['racesport-regular']
      }
    }
  },
  plugins: []
};
