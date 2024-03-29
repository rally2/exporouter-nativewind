// WARNING THIS ISN'T VERSIONED
import { ExpoConfig, ConfigContext } from '@expo/config';

export const ENV = {
  EXPO_PUBLIC_APP_DISPLAY_NAME: process.env.EXPO_PUBLIC_APP_DISPLAY_NAME || '(Dev) RouterWind',
  EXPO_PUBLIC_PACKAGE: process.env.EXPO_PUBLIC_PACKAGE || 'com.rally2.routerwind.dev',
  EXPO_PUBLIC_FOREGROUND_IMAGE:
    process.env.EXPO_PUBLIC_FOREGROUND_IMAGE || './assets/dev/adaptive-icon.dev.png',
  EXPO_PUBLIC_SCHEME: process.env.EXPO_PUBLIC_SCHEME || 'routerwinddev',
  EXPO_PUBLIC_BUNDLE_ID: process.env.EXPO_PUBLIC_BUNDLE_ID || 'com.rally2.routerwind.dev',
  EXPO_PUBLIC_ICON_PATH: process.env.EXPO_PUBLIC_ICON_PATH || './assets/dev/icon.dev.png',

  // Versioing
  EXPO_PUBLIC_APP_VERSION: process.env.EXPO_PUBLIC_APP_VERSION || '1.0',
  EXPO_PUBLIC_BUILD_NUMBER: process.env.EXPO_PUBLIC_BUILD_NUMBER || '1',
  EXPO_PUBLIC_OTA: process.env.EXPO_PUBLIC_OTA || '0',
  EXPO_PUBLIC_ANDROID_VERSION_CODE:
    parseInt(process.env.EXPO_PUBLIC_ANDROID_VERSION_CODE || '') || 1000001
};

if (process.env.APP_ENV === 'production') {
  setupProductionEnvironment();
} else if (process.env.APP_ENV === 'staging') {
  setupStagingEnvironment();
} else {
  // Development environemnt is configured based on the .env file
}

// See https://docs.expo.dev/versions/latest/config/app/
export default ({ config }: ConfigContext): ExpoConfig => ({
  // Spreads static configuration from app.json if we want to seperate out and be more
  // explicit about what should / and should not change
  ...config,
  name: ENV.EXPO_PUBLIC_APP_DISPLAY_NAME || '(Dev) RouterWind',
  owner: 'rally2',
  slug: 'routerwind',
  description:
    'Expo Router & Nativewind Template to quick project spin up.  Configured environments, EAS profiles & more!',
  privacy: 'hidden',
  platforms: ['android', 'ios', 'web'],
  scheme: ENV.EXPO_PUBLIC_SCHEME,
  version: ENV.EXPO_PUBLIC_APP_VERSION,
  orientation: 'portrait',
  icon: ENV.EXPO_PUBLIC_ICON_PATH,
  userInterfaceStyle: 'automatic',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#1F2937'
  },
  updates: {
    fallbackToCacheTimeout: 3000,
    url: 'https://u.expo.dev/343b7455-38e2-4f2d-b28e-cedbcbde87bd'
  },
  runtimeVersion: {
    policy: 'appVersion'
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    bundleIdentifier: ENV.EXPO_PUBLIC_BUNDLE_ID,
    buildNumber: ENV.EXPO_PUBLIC_BUILD_NUMBER,
    supportsTablet: true
  },
  android: {
    package: ENV.EXPO_PUBLIC_PACKAGE,
    adaptiveIcon: {
      foregroundImage: ENV.EXPO_PUBLIC_FOREGROUND_IMAGE,
      backgroundColor: '#1F2937'
    },
    versionCode: ENV.EXPO_PUBLIC_ANDROID_VERSION_CODE || 1000001
  },
  web: {
    bundler: 'metro',
    output: 'static',
    favicon: './assets/images/favicon.png'
  },
  extra: {
    ...ENV,
    eas: {
      projectId: '343b7455-38e2-4f2d-b28e-cedbcbde87bd'
    }
  },
  experiments: {
    typedRoutes: true,
    tsconfigPaths: true
  },
  plugins: ['expo-router']
});

function setupProductionEnvironment() {
  ENV.EXPO_PUBLIC_APP_DISPLAY_NAME = 'RouterWind';
  ENV.EXPO_PUBLIC_PACKAGE = 'com.rally2.routerwind';
  ENV.EXPO_PUBLIC_FOREGROUND_IMAGE = './assets/adaptive-icon.png';
  ENV.EXPO_PUBLIC_SCHEME = 'routerwind';
  ENV.EXPO_PUBLIC_BUNDLE_ID = 'com.rally2.routerwind';
  ENV.EXPO_PUBLIC_ICON_PATH = './assets/icon.png';
  ENV.EXPO_PUBLIC_APP_VERSION = '1.0';
  ENV.EXPO_PUBLIC_BUILD_NUMBER = '1';
  ENV.EXPO_PUBLIC_OTA = '0';
  ENV.EXPO_PUBLIC_ANDROID_VERSION_CODE = 1000001;
}

function setupStagingEnvironment() {
  ENV.EXPO_PUBLIC_APP_DISPLAY_NAME = '(Staging) RouterWind';
  ENV.EXPO_PUBLIC_PACKAGE = 'com.rally2.routerwind.staging';
  ENV.EXPO_PUBLIC_FOREGROUND_IMAGE = './assets/staging/adaptive-icon.staging.png';
  ENV.EXPO_PUBLIC_SCHEME = 'routerwindstaging';
  ENV.EXPO_PUBLIC_BUNDLE_ID = 'com.rally2.routerwind.staging';
  ENV.EXPO_PUBLIC_ICON_PATH = './assets/staging/icon.staging.png';
  ENV.EXPO_PUBLIC_APP_VERSION = '1.0';
  ENV.EXPO_PUBLIC_BUILD_NUMBER = '3';
  ENV.EXPO_PUBLIC_OTA = '0';
  ENV.EXPO_PUBLIC_ANDROID_VERSION_CODE = 1000001;
}
