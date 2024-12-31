import { useCallback, useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from 'expo-router';

const useCachedResources = () => {
  const [appIsReady, setAppIsReady] = useState(false);
  const [fontsLoaded, error] = useFonts({
    ...InterFonts,
    ...MillerDisplayFont
  });

  useEffect(() => {
    async function prepare() {
      try {
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        // await new Promise((resolve) => setTimeout(resolve, 5000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    if (fontsLoaded) prepare();
  }, [fontsLoaded]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      // TODO: Remove the 'setTimeout' portion of this.  Used purely for testing. Use an .env for this
      setTimeout(async () => {
        await SplashScreen.hideAsync();
      }, 3000);
    }
  }, [appIsReady]);

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return { appIsReady, onLayoutRootView };
};

// These will correspond to the font files in the 'assets/fonts' directory
const InterFonts = {
  'inter-black': require('../assets/fonts/Inter-Black.ttf'),
  'inter-bold': require('../assets/fonts/Inter-Bold.ttf'),
  'inter-extraBold': require('../assets/fonts/Inter-ExtraBold.ttf'),
  'inter-extraLight': require('../assets/fonts/Inter-ExtraLight.ttf'),
  'inter-light': require('../assets/fonts/Inter-Light.ttf'),
  'inter-medium': require('../assets/fonts/Inter-Medium.ttf'),
  'inter-regular': require('../assets/fonts/Inter-Regular.ttf'),
  'inter-semiBold': require('../assets/fonts/Inter-SemiBold.ttf'),
  'inter-thin': require('../assets/fonts/Inter-Thin.ttf')
};

const MillerDisplayFont = {
  'miller-regular': require('../assets/fonts/MillerDisplay-Regular.otf'),
  'miller-bold': require('../assets/fonts/MillerDisplay-Bold.otf'),
  'miller-italic': require('../assets/fonts/MillerDisplay-Italic.otf'),
  'miller-light': require('../assets/fonts/MillerDisplay-Light.otf'),
  'miller-lightItalic': require('../assets/fonts/MillerDisplay-LightItalic.otf'),
  'miller-semiBold': require('../assets/fonts/MillerDisplay-SemiBold.otf'),
  'miller-semiBoldItalic': require('../assets/fonts/MillerDisplay-SemiBoldItalic.otf')
};

export default useCachedResources;
