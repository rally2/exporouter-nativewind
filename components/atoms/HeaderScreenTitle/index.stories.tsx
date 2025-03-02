import { View } from 'react-native';
import HeaderScreenTitle from '.';

export default {
  title: 'Components/Atoms/HeaderScreenTitle',
  component: HeaderScreenTitle,
  decorators: [
    (Story: React.FC) => (
      <View>
        <Story />
      </View>
    )
  ]
};

export const Default = {
  args: {
    title: 'Curleaf'
  }
};
