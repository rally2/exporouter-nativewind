import { ENV } from '@/app.config';
import { Link } from 'expo-router';
import { Text, View, TouchableOpacity } from 'react-native';

export default function Preview() {
  return (
    <View className={'flex flex-1 flex-col bg-background dark:bg-backgroundDark'}>
      <View className={'flex max-w-screen-lg flex-1 items-center justify-center'}>
        <Text className={'text-6xl font-bold text-lightTextTheme dark:text-darkTextTheme'}>
          Examples:
        </Text>

        {/* EAS Secrets accessed via process.env.*. */}
        <View className="gap-3">
          <Text className="text-center text-lightTextTheme underline dark:text-darkTextTheme">
            Below were added as EAS Secrets:
          </Text>
          <Text className="text-center text-lightTextTheme dark:text-darkTextTheme">
            EXPO_PUBLIC_SECRET: {process.env.EXPO_PUBLIC_SECRET}
          </Text>
          <Text className="text-center text-lightTextTheme dark:text-darkTextTheme">
            SECRET: {process.env.SECRET}
          </Text>

          <Text className="text-center text-lightTextTheme underline dark:text-darkTextTheme">
            Below from eas.json:
          </Text>
          <Text className="text-center text-lightTextTheme dark:text-darkTextTheme">
            EXPO_PUBLIC_APP_DISPLAY_NAME: {process.env.EXPO_PUBLIC_APP_DISPLAY_NAME}
          </Text>

          <Text className="text-center text-lightTextTheme underline dark:text-darkTextTheme">
            Below accessed through "Constants.expoConfig?.extra" & "app.config.ts":
          </Text>
          <Text className="text-center text-lightTextTheme dark:text-darkTextTheme">
            DYNAMIC_CONFIG_ENV_VAR: {ENV.DYNAMIC_CONFIG_ENV_VAR}
          </Text>
        </View>

        <View className="absolute bottom-8 w-full gap-3">
          <Link href="/(auth)" asChild>
            <TouchableOpacity className="bg-lightTextTheme dark:bg-darkTextTheme">
              <Text className="my-3 text-center font-bold text-darkTextTheme dark:text-lightTextTheme">
                Go to Root Layout
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
