import SVG from '@/assets/svg';
import DemoPathAliasText from '@/components/atoms/DemoPathAliasText';
import { SplashScreen } from 'expo-router';
import { Text, View } from 'react-native';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <View className={'flex flex-1 items-center p-6'}>
      <View className={'flex flex-grow justify-center max-w-screen-lg mx-auto'}>
        <Text className={'text-6xl font-bold'}>Hello World</Text>
        <Text className="text-4xl">This is the first page of your app.</Text>
        <DemoPathAliasText />
        <View className="flex-row justify-center items-center my-2">
          <Text className="text-xl">Using an SVG:</Text>
          <SVG.Headphones className="mx-4" height={25} width={25} />
        </View>
      </View>
    </View>
  );
}
