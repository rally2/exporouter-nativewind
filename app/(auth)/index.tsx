import SVG from '@/assets/svg';
import { useTheme } from '@/context/Theme';
import { Link } from 'expo-router';
import { cssInterop } from 'nativewind';
import { Text, View, TouchableOpacity } from 'react-native';

// e.g. using the SVG.Headphones component
cssInterop(SVG.Headphones, {
  className: "style"
})

export default function Register() {
  const { isDarkMode } = useTheme();

  return (
    <View className={'flex flex-1 flex-col bg-background dark:bg-backgroundDark'}>
      <View className={'flex max-w-screen-lg flex-1 items-center justify-center'}>
        <View className="my-2 flex-row items-center justify-center">
          <Text className="text-xl text-lightTextTheme dark:text-darkTextTheme">Using an SVG:</Text>
          <SVG.Headphones
            className="mx-4 fill-lightTextTheme dark:fill-darkTextTheme"
            height={25}
            width={25}
          />
        </View>
        <View className="absolute bottom-8 w-full gap-3">
          <Link href="/preview" asChild>
            <TouchableOpacity className="bg-lightTextTheme dark:bg-darkTextTheme">
              <Text className="my-3 text-center font-bold text-darkTextTheme dark:text-lightTextTheme">
                Go to Env Preview
              </Text>
            </TouchableOpacity>
          </Link>
          <Link href="/theme" asChild>
            <TouchableOpacity className="bg-lightTextTheme dark:bg-darkTextTheme">
              <Text className="my-3 text-center font-bold text-darkTextTheme dark:text-lightTextTheme">
                Go to Theme
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
}
