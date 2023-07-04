import { Text, View } from 'react-native';

export default function Page() {
  return (
    <View className={'flex flex-1 items-center p-6'}>
      <View className={'flex flex-grow justify-center max-w-screen-lg mx-auto'}>
        <Text className={'text-6xl font-bold'}>Hello World</Text>
        <Text className="text-4xl">This is the first page of your app.</Text>
      </View>
    </View>
  );
}
