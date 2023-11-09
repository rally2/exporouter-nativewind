// WARNING THIS ISN'T VERSIONED
import { ExpoConfig, ConfigContext } from '@expo/config';

// This is the default configuration for local development
export const ENV = {
  APP_ENV: 'staging',
  APP_DISPLAY_NAME: '(Staging) NativewindRouter Template',
  APP_SCHEME: 'routerwindlocal',
  APP_BUNDLE_ID: 'com.rally2shane.dev.exporouterwind',
  ICON_PATH: './assets/icon.png',

  APP_VERSION: '1.0.0',
  BUILD_NUMBER: '1'
};

if (process.env.APP_ENV === 'production') {
  setupProductionEnvironment();
} else if (process.env.APP_ENV === 'staging') {
  setupStagingEnvironment();
} else {
  // Development environemnt is configured by default
}

// See https://docs.expo.dev/versions/latest/config/app/
export default ({ config }: ConfigContext): ExpoConfig => ({
  // Spreads static configuration from app.json if we want to seperate out and be more
  // explicit about what should / and should not change
  ...config,
  name: ENV.APP_DISPLAY_NAME,
  slug: 'expo-nativewind',
  description: 'Expo Router Nativewind Template',
  privacy: 'hidden',
  platforms: ['android', 'ios'],
  scheme: ENV.APP_SCHEME,
  version: ENV.APP_VERSION,
  orientation: 'portrait',
  icon: ENV.ICON_PATH,
  userInterfaceStyle: 'automatic',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#1F2937'
  },
  updates: {
    fallbackToCacheTimeout: 3000,
    url: 'https://u.expo.dev/c5cdbb3e-9ece-452e-9691-fbc5ae4aff5b'
  },
  runtimeVersion: {
    policy: 'appVersion'
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    bundleIdentifier: ENV.APP_BUNDLE_ID,
    buildNumber: ENV.BUILD_NUMBER,
    supportsTablet: true
  },
  android: {
    package: 'com.clubspike.scoreboard',
    adaptiveIcon: {
      foregroundImage: ENV.APP_ENV
        ? './assets/adaptive-icon.png'
        : './assets/dev/adaptive-icon.png',
      backgroundColor: '#1F2937'
    }
  },
  web: {
    bundler: 'metro',
    output: 'static',
    favicon: './assets/images/favicon.png'
  },
  extra: {
    ...ENV,
    eas: {
      projectId: 'c5cdbb3e-9ece-452e-9691-fbc5ae4aff5b'
    },
    router: {
      origin: true
    }
  },
  experiments: {
    typedRoutes: true,
    tsconfigPaths: true
  },
  plugins: ['expo-router']
});

function setupProductionEnvironment() {
  // TODO: Add production configuration
}

function setupStagingEnvironment() {
  ENV.APP_ENV = 'staging';
  ENV.APP_DISPLAY_NAME = '(Staging) NativewindRouter Template';
  ENV.APP_SCHEME = 'routerwindlocal';
  ENV.APP_BUNDLE_ID = 'com.rally2shane.dev.exporouterwind';
  ENV.ICON_PATH = './assets/icon.png';

  ENV.APP_VERSION = '1.0.0';
  ENV.BUILD_NUMBER = '1';
}
