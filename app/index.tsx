import { Text, View } from 'react-native';
import Svg from '../assets/Svg';

export default function Page() {
  return (
    <View className={'flex flex-1 items-center p-6'}>
      <View className={'flex flex-grow justify-center max-w-screen-lg mx-auto'}>
        <Text className={'text-6xl font-bold'}>Hello World</Text>
        <Text className="text-4xl">This is the first page of your app.</Text>
        <Svg.Headphones height={50} width={50} />
      </View>
    </View>
  );
}
