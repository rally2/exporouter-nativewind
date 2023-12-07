import { Text, View, SafeAreaView, Switch } from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '@/context/Theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import NativeSwitch from '@/components/atoms/Switch';

export default function Theme() {
  const { toggleTheme, isDarkMode, colorScheme } = useTheme();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <>
      <View
        className="flex-1 bg-background dark:bg-backgroundDark"
        style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
      >
        <View className="mx-5 mb-5">
          <Text className="mt-5 text-4xl text-slate-950 dark:text-white">Theme</Text>
          <Text className="dark:text-gray-450 mt-2 text-xl text-slate-400 underline">
            Color Pallette:
          </Text>
        </View>

        <View className="mx-5 mb-5 flex flex-row items-center">
          <Text className="mr-5 text-lg text-slate-900 dark:text-white">
            {colorScheme?.replace(/^\w/, (c) => c.toUpperCase())}
          </Text>
          <NativeSwitch
            className="mr-5"
            onValueChange={toggleTheme}
            value={isDarkMode}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
          />
          <Text className="text-lg">{isDarkMode ? '🌙' : '🌞'}</Text>
        </View>

        {/* TODO: Create a 'Pallette' component that is made up of 'Swatch' components showing the distinct colors in the Theme. */}
        <View className="flex-1 flex-row flex-wrap items-center justify-center">
          <View className="mx-5 flex w-1/5 items-center justify-center">
            <View className="dark:bg-brandPrimaryDark mx-2 my-2 flex h-10 w-full rounded-full bg-brandPrimary"></View>
            <Text className="text-slate-900 dark:text-white">Brand</Text>
          </View>

          <Text
            className="text-slate-900 underline dark:text-white"
            onPress={() => router.push('/(auth)/')}
          >
            Back to Home
          </Text>
        </View>
      </View>
    </>
  );
}
