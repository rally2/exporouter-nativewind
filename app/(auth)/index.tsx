import SVG from '@/assets/svg';
import DemoPathAliasText from '@/components/atoms/DemoPathAliasText';
import { useTheme } from '@/context/Theme';
import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function Register() {
  const { isDarkMode } = useTheme();

  return (
    <View className={'flex flex-1 items-center p-6 bg-background dark:bg-backgroundDark'}>
      <View className={'flex flex-grow justify-center max-w-screen-lg mx-auto'}>
        <Text className={'text-6xl font-bold text-lightText dark:text-darkText'}>Hello World</Text>
        <Text className="text-4xl text-lightText dark:text-darkText">
          This is the first page of your app.
        </Text>
        <DemoPathAliasText />
        <View className="flex-row items-center justify-center my-2">
          <Text className="text-xl text-lightText dark:text-darkText">Using an SVG:</Text>
          <SVG.Headphones
            className="mx-4"
            height={25}
            width={25}
            fill={isDarkMode ? 'fill-darkText' : 'fill-lightText'}
          />
        </View>
        <Text className="my-4 text-center font-racesport">RaceSport Custom Font</Text>

        <Link className="" href="/theme">
          Go to Theme
        </Link>
      </View>
    </View>
  );
}
