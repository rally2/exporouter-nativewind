import { Platform as RNPlatform } from 'react-native';

class Platform {
  static Android = RNPlatform.OS === 'android';

  static IOS = RNPlatform.OS === 'ios';

  static Web = RNPlatform.OS === 'web';
}

export default Platform;
