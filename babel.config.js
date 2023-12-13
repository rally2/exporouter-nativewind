module.exports = {
  presets: [['babel-preset-expo', { jsxImportSource: 'nativewind' }], 'nativewind/babel'],
  plugins: [
    'react-native-reanimated/plugin',
    // Required for expo-router
    'expo-router/babel'
  ]
};