import React from 'react';
import { Link, Stack } from 'expo-router';
import { View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! This screen doesn't exist." }} />
      <View className="flex-1 items-center justify-center">
        <Link href="/">Go to home screen</Link>
      </View>
    </>
  );
}
