import { Text, View } from 'react-native';
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
        className="flex-1 bg-Neutral-White dark:bg-Neutral-Black"
        style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
      >
        <View className="mx-5 mb-5">
          <Text className="mt-5 text-4xl text-slate-950 dark:text-white">Theme</Text>
        </View>

        <View className="mx-5 mb-5 flex flex-row items-center">
          <NativeSwitch
            className="mr-5"
            onValueChange={toggleTheme}
            value={isDarkMode}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
          />
          <Text className="text-lg">{isDarkMode ? '🌙' : '🌞'}</Text>
        </View>
      </View>
    </>
  );
}
