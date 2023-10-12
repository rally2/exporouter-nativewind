import SVG from '@/assets/svg';
import DemoPathAliasText from '@/components/atoms/DemoPathAliasText';
import useCachedResources from '@/hooks/useCachedResources';
import { SplashScreen } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { appIsReady, onLayoutRootView } = useCachedResources();

  if (!appIsReady) return null;

  return (
    <View className={'flex flex-1 items-center p-6'} onLayout={onLayoutRootView}>
      <View className={'flex flex-grow justify-center max-w-screen-lg mx-auto'}>
        <Text className={'text-6xl font-bold'}>Hello World</Text>
        <Text className="text-4xl">This is the first page of your app.</Text>
        <DemoPathAliasText />
        <View className="flex-row justify-center items-center my-2">
          <Text className="text-xl">Using an SVG:</Text>
          <SVG.Headphones className="mx-4" height={25} width={25} />
        </View>
        <Text className="my-4" style={styles.customFont}>
          RaceSport Custom Font Used
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  customFont: {
    fontFamily: 'racesport-regular'
  }
});
