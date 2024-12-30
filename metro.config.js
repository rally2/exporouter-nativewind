// Learn more https://docs.expo.io/guides/customizing-metro
const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const withStorybook = require('@storybook/react-native/metro/withStorybook');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

const { transformer, resolver } = config;

config.transformer = {
  ...transformer,
  babelTransformerPath: require.resolve('react-native-svg-transformer'),
  unstable_allowRequireContext: true
};

config.resolver = {
  ...resolver,
  assetExts: [...resolver.assetExts.filter((ext) => ext !== 'svg'), 'lottie'],
  // Added .mjs per Storybook docs.  See above link
  sourceExts: [...resolver.sourceExts, 'svg', 'mjs']
};

module.exports = withStorybook(withNativeWind(config, { input: './global.css' }), {
  // path to your storybook config folder
  configPath: path.resolve(__dirname, './.storybook')
});
