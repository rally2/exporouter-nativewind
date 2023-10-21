import { Text, View, SafeAreaView, Switch } from 'react-native';
import { useState } from 'react';
import { useColorScheme } from 'nativewind';
import { useRouter } from 'expo-router';
import { useTheme } from '@/context/Theme';

export default function Theme() {
  const { toggleTheme, isDarkMode, colorScheme } = useTheme();
  const router = useRouter();

  return (
    <>
      <SafeAreaView className="flex-1 bg-background dark:bg-backgroundDark">
        <View className="mx-5 mb-5">
          <Text className="mt-5 text-4xl text-slate-950 dark:text-white">Theme</Text>
          <Text className="mt-2 text-xl underline dark:text-gray-450 text-slate-400">
            Color Pallette:
          </Text>
        </View>

        <View className="flex flex-row items-center mx-5 mb-5">
          <Text className="mr-5 text-lg text-slate-900 dark:text-white">
            {colorScheme?.replace(/^\w/, (c) => c.toUpperCase())}
          </Text>
          <Switch
            className="mr-5"
            onValueChange={toggleTheme}
            value={isDarkMode}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
          />
          <Text className="text-lg">{isDarkMode ? '🌙' : '🌞'}</Text>
        </View>

        {/* TODO: Create a 'Pallette' component that is made up of 'Swatch' components showing the distinct colors in the Theme. */}
        <View className="flex-row flex-wrap items-center justify-center flex-1">
          <View className="flex items-center justify-center w-1/5 mx-5">
            <View className="flex w-full h-10 mx-2 my-2 rounded-full bg-brandPrimary dark:bg-brandPrimaryDark"></View>
            <Text className="text-slate-900 dark:text-white">Brand</Text>
          </View>

          <Text
            className="underline text-slate-900 dark:text-white"
            onPress={() => router.push('/(auth)/')}
          >
            Back to Home
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
}
