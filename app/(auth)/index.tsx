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
        <Text className={'text-6xl font-bold text-lightTextTheme dark:text-darkTextTheme'}>
          Examples:
        </Text>
        <DemoPathAliasText />
        <View className="flex-row items-center justify-center my-2">
          <Text className="text-xl text-lightTextTheme dark:text-darkTextTheme">Using an SVG:</Text>
          <SVG.Headphones
            className="mx-4 fill-lightTextTheme dark:fill-darkTextTheme"
            height={25}
            width={25}
          />
        </View>
        <Text className="my-4 text-center font-racesport text-lightTextTheme dark:text-darkTextTheme">
          RaceSport Custom Font
        </Text>

        <Link className="absolute" href="/theme" asChild>
          <TouchableOpacity className="bottom-0 w-full bg-lightTextTheme dark:bg-darkTextTheme">
            <Text className="my-3 font-bold text-center text-darkTextTheme dark:text-lightTextTheme">
              Go to Theme
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
