import ThemeProvider from '@/context/Theme';
import useCachedResources from '@/hooks/useCachedResources';
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import '../global.css';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

let Layout = RootLayoutNav;
if (process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === 'true') {
  Layout = require('@/.storybook').default;
}

export default function RootLayout() {
  const { appIsReady, onLayoutRootView } = useCachedResources();

  if (!appIsReady) return null;

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <ThemeProvider>
        <Layout />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

function RootLayoutNav() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
