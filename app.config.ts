// WARNING THIS ISN'T VERSIONED
import { ExpoConfig, ConfigContext } from '@expo/config';

export const ENV = {
  DYNAMIC_CONFIG_ENV_VAR: 'keep it secret, keep it safe... (dev)'
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
  name: process.env.EXPO_PUBLIC_APP_DISPLAY_NAME || '(Dev) RouterWind',
  owner: 'rally2',
  slug: 'routerwind',
  description:
    'Expo Router & Nativewind Template to quick project spin up.  Configured environments, EAS profiles & more!',
  privacy: 'hidden',
  platforms: ['android', 'ios', 'web'],
  scheme: process.env.EXPO_PUBLIC_SCHEME,
  version: process.env.EXPO_PUBLIC_APP_VERSION,
  orientation: 'portrait',
  icon: process.env.EXPO_PUBLIC_ICON_PATH,
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
    bundleIdentifier: process.env.EXPO_PUBLIC_BUNDLE_ID,
    buildNumber: process.env.EXPO_PUBLIC_BUILD_NUMBER,
    supportsTablet: true
  },
  android: {
    package: process.env.EXPO_PUBLIC_PACKAGE,
    adaptiveIcon: {
      foregroundImage: process.env.EXPO_PUBLIC_FOREGROUND_IMAGE,
      backgroundColor: '#1F2937'
    },
    versionCode: parseInt(process.env.EXPO_PUBLIC_BUILD_NUMBER || '1')
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

// TODO: Potentially remove having leveraged .env files and eas.json instead
function setupProductionEnvironment() {
  ENV.DYNAMIC_CONFIG_ENV_VAR = 'keep it secret, keep it safe... (prod)'
}

// TODO: Potentially remove having leveraged .env files and eas.json instead
function setupStagingEnvironment() {
  ENV.DYNAMIC_CONFIG_ENV_VAR = 'keep it secret, keep it safe... (staging)'
}
