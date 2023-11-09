import SVG from '@/assets/svg';
import DemoPathAliasText from '@/components/atoms/DemoPathAliasText';
import { useTheme } from '@/context/Theme';
import { Link } from 'expo-router';
import { Text, View, TouchableOpacity } from 'react-native';

export default function Register() {
  const { isDarkMode } = useTheme();

  return (
    <View className={'flex flex-1 p-6 bg-background dark:bg-backgroundDark flex-col'}>
      <View className={'flex flex-1 justify-center max-w-screen-lg items-center'}>
        <Text className={'text-6xl font-bold text-lightText dark:text-darkText'}>Examples:</Text>
        <DemoPathAliasText />
        <View className="flex-row items-center justify-center my-2">
          <Text className="text-xl text-lightText dark:text-darkText">Using an SVG:</Text>
          <SVG.Headphones
            className="mx-4 fill-lightText dark:fill-darkText"
            height={25}
            width={25}
          />
        </View>
        <Text className="my-4 text-center font-racesport text-lightText dark:text-darkText">
          RaceSport Custom Font
        </Text>

        <Link className="absolute" href="/theme" asChild>
          <TouchableOpacity className="bottom-0 w-full bg-lightText dark:bg-darkText">
            <Text className="my-3 font-bold text-center text-darkText dark:text-lightText">
              Go to Theme
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
